import { colors, spacing, typography } from "@/theme";
import React, { useState } from "react";
import styled from "styled-components/native";

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric" | "decimal-pad" | "email-address";
  error?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
}

const Container = styled.View`
  margin-bottom: ${spacing.md}px;
`;

const Label = styled.Text`
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.sm}px;
`;

const InputContainer = styled.View<{ hasError?: boolean }>`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => (props.hasError ? colors.error : colors.border)};
  border-radius: 10px;
  background-color: ${colors.background.secondary};
`;

const Input = styled.TextInput`
  flex: 1;
  padding: ${spacing.md}px ${spacing.lg}px;
  font-size: ${typography.sizes.md}px;
  color: ${colors.text.primary};
`;

const ToggleButton = styled.Pressable`
  padding: ${spacing.md}px;
`;

const ToggleText = styled.Text`
  color: ${colors.primary};
  font-size: ${typography.sizes.sm}px;
  font-weight: 600;
`;

const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: ${typography.sizes.sm}px;
  margin-top: ${spacing.xs}px;
`;

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  error,
  multiline = false,
  secureTextEntry = false,
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <Container>
      <Label>{label}</Label>

      <InputContainer hasError={!!error}>
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.muted}
          keyboardType={keyboardType}
          multiline={multiline}
          secureTextEntry={hidden}
        />

        {secureTextEntry && (
          <ToggleButton onPress={() => setHidden((prev) => !prev)}>
            <ToggleText>{hidden ? "Show" : "Hide"}</ToggleText>
          </ToggleButton>
        )}
      </InputContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

interface FormSectionProps {
  title?: string;
  children: React.ReactNode;
}

const SectionContainer = styled.View`
  margin-bottom: ${spacing.lg}px;
`;

const SectionTitle = styled.Text`
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
  color: ${colors.text.primary};
  margin-bottom: ${spacing.md}px;
`;

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
}) => {
  return (
    <SectionContainer>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionContainer>
  );
};
