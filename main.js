const StorageType = localStorage;
const ConsentName = "Agree to the following";

const ShouldShowPopup = () => !StorageType.getItem(ConsentName);
const SaveToStorage = () => StorageType.setItem(ConsentName, true);

window.onload = () => {
    if (ShouldShowPopup()){
        const consent = confirm("Agree to TOS");
        if (consent){
            SaveToStorage();
        }
    }
};
