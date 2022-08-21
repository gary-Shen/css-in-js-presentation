import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BiCheck } from 'react-icons/bi';

import { StyledMenu, StyledOption, StyledSelect, StyledTitle } from './styled';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export function Option({
  children,
  onClick,
  active,
}: {
  value?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  active?: boolean;
}) {
  return (
    <StyledOption active={active} onClick={onClick}>
      {children}
    </StyledOption>
  );
}

export default function Select({ value, defaultValue, onChange, children, title }: SelectProps) {
  const [currentValue, setValue] = useState(defaultValue);

  const handleOnChange = useCallback(
    (changedValue: string) => {
      setValue(changedValue);

      if (typeof onChange === 'function') {
        onChange(changedValue);
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (value && value !== currentValue) {
      setValue(value);
    }
  }, [currentValue, value]);

  const [isOpen, setOpen] = useState(false);
  const toggleMenuVisible = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!menuRef.current) {
      return;
    }

    const boundingRect = menuRef.current.getBoundingClientRect();
    if (boundingRect.right > window.innerWidth) {
      menuRef.current.style.right = '0';
    } else if (boundingRect.left < 0) {
      menuRef.current.style.left = '0';
    } else if (boundingRect.bottom < 0) {
      menuRef.current.style.bottom = '0';
    }
  }, []);

  return (
    <StyledSelect>
      <StyledTitle className="select-value" onClick={toggleMenuVisible}>
        {title ?? currentValue}
      </StyledTitle>
      <StyledMenu className="select-options" isOpen={isOpen} ref={menuRef}>
        {React.Children.map(children, (child) =>
          React.cloneElement(
            child as React.ReactElement,
            {
              onClick: () => React.isValidElement(child) && handleOnChange(child.props.value),
              active: React.isValidElement(child) && child.props.value === currentValue,
            },
            [
              ...(React.isValidElement(child)
                ? [
                    child.props.value === currentValue ? <BiCheck key="check" className="active-icon" /> : null,
                    child.props.children,
                  ]
                : []),
            ],
          ),
        )}
      </StyledMenu>
    </StyledSelect>
  );
}
