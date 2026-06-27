/** Domain error for AI operations, carrying a user-friendly message. */
export class AiError extends Error {
  constructor(
    message: string,
    readonly detail?: unknown,
  ) {
    super(message);
    this.name = 'AiError';
  }
}
