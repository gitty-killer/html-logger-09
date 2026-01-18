# html-logger-09

A small HTML tool that computes text statistics for logger.

## Objective
- Provide quick text metrics for logger documents.
- Report top word frequencies for fast inspection.

## Use cases
- Validate logger drafts for repeated terms before review.
- Summarize logger notes when preparing reports.

## Usage
open index.html and paste text

## Output
- lines: total line count
- words: total word count
- chars: total character count
- top words: most frequent tokens (case-insensitive)

## Testing
- run `bash scripts/verify.sh`

## Notes
- Only ASCII letters and digits are treated as word characters.
