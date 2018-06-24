const ManageProfiles = (function () {
    var localP = localStorage.getItem("profiles");
    var profiles = [];
    if (!localP) {
        $.get("JSON/profiles.json", function (ret) {
            profiles = ret;            
            // localStorage.setItem("courses", JSON.stringify(courses));
            save();
        });
    }
    else {        
        profiles = JSON.parse(localP);
        // courses = local;
        save();
    }

    function save() {
        
        localStorage.setItem("profiles", JSON.stringify(profiles));
        // localStorage.setItem("courses", courses);
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

// ManageCourses.add(new Course(1, "matheus", "matheus", "matheus", 100, "matheus", 20, 40));