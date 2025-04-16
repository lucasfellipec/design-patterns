# Singleton

Ensure that a class has only one instance in the program and provide a global access point for it.

Singleton is used to provide access to shared resources, such as database access, graphical interfaces, file systems, print servers, logging, etc...

It is also used to replace global variables, as in cases of using system configuration objects.

We can protect the instance with encapsulation, preventing some other part of the code overwriting its value.

## Applicability

- Use Singleton when a class needs to have only one instance available in your program.
- Use Singleton when you are using global variables to maintain important parts of the program, such as configuration variables that are used throughout the application.
