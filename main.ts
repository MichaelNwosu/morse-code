enum RadioMessage {
    message1 = 49434
}
function Words () {
    A = ".-"
    B = "-..."
    C = "-.-."
    D = "-.."
    E = "."
    F = "..-."
    G = "--."
    H = "...."
    I = ".."
    J = ".---"
    K = "-.-"
    L = ".-.."
    M = "--"
    N = "-."
    O = "---"
    P = ".--."
    Q = "--.-"
    R = ".-."
    S = "..."
    T = "-"
    U = "..-"
    W = ".--"
    V = "...-"
    X = "-..-"
    Y = "-.--"
    Z = "--.."
    Text = ""
}
// Press a to input a dot
input.onButtonPressed(Button.A, function () {
    Text = "" + Text + "."
})
function Submit () {
    if (Text == A) {
        Show = "" + Show + "A"
        basic.showString("A")
    }
    if (Text == B) {
        Show = "" + Show + "B"
        basic.showString("B")
    }
    if (Text == C) {
        Show = "" + Show + "C"
        basic.showString("C")
    }
    if (Text == D) {
        Show = "" + Show + "D"
        basic.showString("D")
    }
    if (Text == E) {
        Show = "" + Show + "E"
        basic.showString("E")
    }
    if (Text == F) {
        Show = "" + Show + "F"
        basic.showString("F")
    }
    if (Text == G) {
        Show = "" + Show + "G"
        basic.showString("G")
    }
    if (Text == H) {
        Show = "" + Show + "H"
        basic.showString("H")
    }
    if (Text == I) {
        Show = "" + Show + "I"
        basic.showString("I")
    }
    if (Text == J) {
        Show = "" + Show + "J"
        basic.showString("J")
    }
    if (Text == K) {
        Show = "" + Show + "K"
        basic.showString("A")
    }
    if (Text == L) {
        Show = "" + Show + "L"
        basic.showString("L")
    }
    if (Text == M) {
        Show = "" + Show + "M"
        basic.showString("M")
    }
    if (Text == N) {
        Show = "" + Show + "N"
        basic.showString("N")
    }
    if (Text == O) {
        Show = "" + Show + "O"
        basic.showString("O")
    }
    if (Text == P) {
        Show = "" + Show + "P"
        basic.showString("P")
    }
    if (Text == Q) {
        Show = "" + Show + "Q"
        basic.showString("Q")
    }
    if (Text == R) {
        Show = "" + Show + "R"
        basic.showString("R")
    }
    if (Text == S) {
        Show = "" + Show + "S"
        basic.showString("S")
    }
    if (Text == T) {
        Show = "" + Show + "T"
        basic.showString("T")
    }
    if (Text == U) {
        Show = "" + Show + "U"
        basic.showString("U")
    }
    if (Text == V) {
        Show = "" + Show + "V"
        basic.showString("V")
    }
    if (Text == W) {
        Show = "" + Show + "W"
        basic.showString("W")
    }
    if (Text == X) {
        Show = "" + Show + "X"
        basic.showString("X")
    }
    if (Text == Y) {
        Show = "" + Show + "Y"
        basic.showString("Y")
    }
    if (Text == Z) {
        Show = "" + Show + "Z"
        basic.showString("Z")
    }
    Text = ""
}
// Press this to submit the letter
input.onButtonPressed(Button.AB, function () {
    Submit()
    basic.pause(100)
    basic.clearScreen()
})
// Press this for a dash
input.onButtonPressed(Button.B, function () {
    Text = "" + Text + "-"
})
let Show = ""
let Text = ""
let Z = ""
let Y = ""
let X = ""
let V = ""
let W = ""
let U = ""
let T = ""
let S = ""
let R = ""
let Q = ""
let P = ""
let O = ""
let N = ""
let M = ""
let L = ""
let K = ""
let J = ""
let I = ""
let H = ""
let G = ""
let F = ""
let E = ""
let D = ""
let C = ""
let B = ""
let A = ""
Words()
// Press to show the word
basic.forever(function () {
    if (input.compassHeading() < 45) {
        basic.showString(Show)
    }
})
