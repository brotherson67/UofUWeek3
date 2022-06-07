___________________________________________________________________________________________________
___________________________________________________________________________________________________

CREATING A PASSWORD GENERATOR

REQUIREMENTS
    GIVEN I need a new, secure password

    WHEN I click the button to generate a password
    THEN I am presented with a series of prompts for password criteria

    WHEN prompted for password criteria
    THEN I select which criteria to include in the password

    WHEN prompted for the length of the password
    THEN I choose a length of at least 8 characters and no more than 128 characters
    
    WHEN asked for character types to include in the password
    THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    
    WHEN I answer each prompt
    THEN my input should be validated and at least one character type should be selected
    
    WHEN all prompts are answered
    THEN a password is generated that matches the selected criteria
    
    WHEN the password is generated
    THEN the password is either displayed in an alert or written to the page


ROUGH-OUTLINE
    create sliding bar that represents the character number
        the min 8
        the max 128
    create checkboxes that represent different characters
        symbols
        uppercase letters 
        lowercase letters
        numbers
            the symbols can be represented using ASCII codes
    if none of the checkboxes are checked alert with be brought up
        else the program runs
    the password is displayed on the page in the 'password' section

SECONDARY-OUTLINE
    HTML
        * add range option with min 8 and max 128
        * add checkboxes that represent the various characters
    JS
        * check to see if boxes are checked
        * if a box is checked I want to add the corresponding symbols to an array
        *
        
