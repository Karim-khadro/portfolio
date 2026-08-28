/**
 * Kept out of submit-intake.ts on purpose: every export of a 'use server'
 * module must be an async function, so the initial state and its type cannot
 * live there.
 */
export type IntakeState = {
  status: 'idle' | 'error';
  errors: Partial<Record<'name' | 'email' | 'message' | 'consent' | 'form', string>>;
};

export const emptyIntakeState: IntakeState = {status: 'idle', errors: {}};
