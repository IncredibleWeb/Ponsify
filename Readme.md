# Ponsify

Ponsify is a simple test for software engineers.

## Scope
The scope of this test is to assess the candidate's basic knowledge of software engineering principles, their ability to learn, work in a team and follow instructions.

## Problem Definition
Implement a function `ponsify(lowerLimit, upperLimit, step)` that sums all the integers from the first parameter, the lower limit; to the second parameter, the upper limit (both inclusive); going in steps expressed as the third parameter.

```
	ponsify(1, 10, 1) // should return the sum of 1+ 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 
	ponsify(2, 12, 3) // should return the sum of 2 + 5 + 8 + 11
	ponsify(5, 4, 2) // should return 0 as the range is invalid 
	ponsify(3, 3, 2) // should return 3
```

You can assume that both the upper and lower limit are positive integers.

## Instructions
- Fork the repository using your own GitHub account.
- Give collaborator access to your interviewer(s) (using their email address).
- Run `npm install` on the root directory to install any dependencies.
- You may implement your solution in `main.js` in the `/src` folder.
- Run the command `gulp` to minify & prepare your solution. If it fails, your JavaScript most likely has a syntax error.
- Run the command `npm test` to validate your solution. If not all tests are passed then your solution is not complete. If the tests are passed then your solution is returning the correct result; however you will also be assesed on the method.
- When you are satisfied, commit and push your changes and create a pull request and assign your interviewer.

## Prerequisites
The test does not require any prior knowledge of the problem definition, however basic knowledge of the JavaScript language is required.

## Important Notes
- Keep your code nice and tidy.
- No JavaScript frameworks are required (no jQuery, Angular, React...etc).
- Any files outside the /src folder do *not* need to be modified; including test files.
- Use suitable commit messages & [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) (if necessary)
