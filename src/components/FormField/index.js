import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Label = styled.label``;

// styled responsável pelo field da descrição e do field da cor
const FormFieldWrapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }
`;

// styled responsável pelos títulos do form field
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 14px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

// styled responsável pelas características do campo de input do usuário
const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 58px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 15px solid transparent;
    border-bottom: 3px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .5s;

    &:focus {
        border-bottom-color: var(--primaryMedium);
    }
    &:focus:not([type="color"]) + ${Label.Text} {
        transform: scale(.6) translateX(-2px) translateY(-10px);
    }

    ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
            &:not([type="color"]) + ${Label.Text} {
                transform: scale(.6) translateX(-2px) translateY(-10px);
            }
        `;
  }}
`;

function FormField({
  label,
  type,
  value,
  name,
  onChange,
  suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasSuggestions = Boolean(suggestions);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
                    /* id={fieldId} */
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : 'on'}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
                    hasSuggestions && (
                    <datalist id={`suggestionFor_${fieldId}`}>
                      {
                                suggestions.map((suggestion) => (
                                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                                    {suggestion}
                                  </option>
                                ))
                            }
                    </datalist>
                    )
                }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: ' ',
  suggestion: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  suggestion: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
