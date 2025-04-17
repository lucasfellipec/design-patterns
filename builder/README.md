# Builder

Separate the construction of a complex object from its representation, so that the same construction process can create different representations.

The pattern suggests separating the code that creates and the code that uses the object.

Method Chaining

## Consequences

### Good
- Separate the creation from utilization;
- The client does not need to create objects directly;
- The same code can create different objects;
- Single Responsibility Principle and Open Closed Principle.

### Bad
- The final code can become very complex.
