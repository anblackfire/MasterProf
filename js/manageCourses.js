const ManageCourses = (function () {
    var local = localStorage.getItem("courses");
    var courses = [];
    if (!local) {
        $.get("JSON/objects.json", function (ret) {
            courses = ret;
            save();
        });
    }
    else {
        courses = local;
        save();
    }

    function save() {
        localStorage.setItem("courses", JSON.stringify(courses));
    }

    function getCourses(title) {
        if (title)
            return courses.filter(c => c.title.toLowerCase() === title.toLowerCase());
        return courses;
    }

    function addCourse(course) {
        courses.push(course);
        save();
    }

    function removeCourse(course) {
        var c = courses.indexOf(c => c.title === course.title);

        if (c === -1) return;

        courses.splice(c);
        save();
    }

    function updateCourse(id, course) {
        var c = courses.indexOf(c => c.id === id);

        if (c === -1) return;

        courses[c] = course;
        save();
    }

    return {
        get: getCourses,
        add: addCourse,
        remove: removeCourse,
        update: updateCourse
    }
})();

// ManageCourses.add(new Course(1, "matheus", "matheus", "matheus", 100, "matheus", 20, 40));