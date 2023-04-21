//versioning 

//detail versioning

// ~ Tilde:

//     ~ freezes major and minor numbers.
//     It is used when you're ready to accept bug-fixes in your dependency, but don't want any potentially incompatible changes.
//     The tilde matches the most recent minor version (the middle number).
//     ~1.2.3 will match all 1.2.x versions, but it will miss 1.3.0.
//     Tilde (~) gives you bug fix releases

// ^ Caret:

//     ^ freezes the major number only.
//     It is used when you're closely watching your dependencies and are ready to quickly change your code if minor release will be incompatible.
//     It will update you to the most recent major version (the first number).
//     ^1.2.3 will match any 1.x.x release including 1.3.0, but it will hold off on 2.0.0.
//     Caret (^) gives you backwards-compatible new functionality as well.


// ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

// ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.








