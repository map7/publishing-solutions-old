// Use this to customize the wymeditor boot process
// Just mirror the options specified in boot_wym.js with the new options here.
// This will completely override anything specified in boot_wym.js for that key.
// e.g. skin: 'something_else'
var custom_wymeditor_boot_options = {
  classesItems: [
    {name: 'text-align', rules:['left', 'center', 'right', 'justify'], join: '-'}
    , {name: 'image-align', rules:['left', 'right'], join: '-'}
    , {name: 'font-size', rules:['small','normal','20pt'], join: '-'}
    , {name: 'text-color', rules:['red', 'blue'], join: '-'}
  ]    
};