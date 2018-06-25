const ManageProfiles = (function () {
    var localP = localStorage.getItem("profiles");
    var profiles = [];
    if (!localP) {
        $.get("JSON/profiles.json", function (ret) {
            profiles = ret;
            save();
        });
    }
    else {
        profiles = JSON.parse(localP);

        save();
    }

    function save() {

        localStorage.setItem("profiles", JSON.stringify(profiles));

    }

    function getProfile(login) {
        if (login)
            return profiles.filter(c => c.login.toLowerCase() === login.toLowerCase());
        return profiles;
    }

    function addProfile(profile) {
        profiles.push(profile);
        save();
    }

    function removeProfile(profile) {
        var c = profiles.indexOf(c => c.login === profile.login);

        if (c === -1) return;

        profiles.splice(c);
        save();
    }

    function updateProfile(login, profile) {
        var c = profiles.indexOf(c => c.login === login);

        if (c === -1) return;

        profiles[c] = profile;
        save();
    }

    return {
        get: getProfile,
        add: addProfile,
        remove: removeProfile,
        update: updateProfile
    }
})();
