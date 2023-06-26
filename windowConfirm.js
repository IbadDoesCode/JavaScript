// window.confirm() JavaScript Method

let result = window.confirm(
    "Are you sure?"
)

if (result === true) {
    // the user clicked OK
    deleteItem()
} else {
    // the user clicked "Cancel"
    // Do Nothing
}
