// =================================================================
// The `switch` Statement
// =================================================================
// A switch statement evaluates an expression and matches the expression's value
// to a `case` clause, executing the statements associated with that case.

// The basic syntax:
// switch (key) {
//     case value1:
//         // code to execute
//         break; // The 'break' keyword is crucial!
//     case value2:
//         // code to execute
//         break;
//     default: // This runs if no other case matches.
//         // code to execute
//         break;
// }
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break; // `break` stops the execution and exits the switch block.
    case "feb":
        console.log("feb");
        break;
    case "march":
        // The value of `month` ("march") matches this case.
        console.log("march");
        break; // The code stops here.
    case "april":
        console.log("april");
        break;

    default: // The `default` case runs if no other case matches.
        console.log("default case match");
        break;
}
// Output: march

// =================================================================
// Fall-through: What happens without `break`
// =================================================================
// If you omit the `break` statement, execution will "fall through" to the next case and continue until a `break` is found or the switch ends.
const day = 3;
switch (day) {
    case 1:
    case 2:
    case 3: // The value of `day` (3) matches this case.
        console.log("It's early in the week.");
        // No break here, so execution continues to the next case!
    case 4:
        console.log("It's the middle of the week.");
        break; // Execution stops here.
    case 5:
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's the weekend!");
        break;
}
// Output:
// It's early in the week.
// It's the middle of the week.