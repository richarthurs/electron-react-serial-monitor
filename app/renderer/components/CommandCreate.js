

// dropdown with command opcode
// based on the selected opcode, bring up inputs for the available subcommands and opcodes

// // list 
// {
//     opcode: 0,
//     command: "command_str_human_readable",
//     subcommands: ["string"], // strings, enumerated from 0
//     epoch: 23432,

// }
// forget about subcommands, basically consider it as a separate opcode
// command base - opcode, command, epoch
// command args - different struct depending on the opcode
// stick both of those together to create the command

// pick the opcode (search or dropdown)
// based on the opcode, generate a react component that has boxes and validation for each field
// https://stackoverflow.com/questions/8312459/iterate-through-object-properties
// loop through properties in a struct, create components for them
// when button is pressed, capture the data in the field, write it out to a struct and add to the lsit
// would be nice to have a cool live updating view of the command as it is entered