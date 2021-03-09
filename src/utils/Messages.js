export const Messages = {
    flashSuccess: (message) => {
        toastr.remove();
        toastr.success(message, null);
    },
    flashWarning: (message) => {
        toastr.remove();
        toastr.warning(message, null);
    },
    flashError: (message) => {
        toastr.remove();
        toastr.error(message, null);
    },
    flashInfo: (message) => {
        toastr.remove();
        toastr.info(message, null);
    },
};

export default Messages;
