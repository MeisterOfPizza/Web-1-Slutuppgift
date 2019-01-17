/*
Because the CROS protocol doesn't allow for GET requests of local files
(in this case, .json files) we'll use a .js file as a wrapper for .json data.
*/

var data =
`
[
    {
        "quote":"That's one small step for <i>a</i> man, one giant leap for mankind.",
        "quotee":"Neil Armstrong"
    },
    {
        "quote":"So much universe, and so little time.",
        "quotee":"Terry Pratchett"
    },
    {
        "quote":"I would like to die on Mars. Just not on impact.",
        "quotee":"Elon Musk"
    }
]
`