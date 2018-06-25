const ManageCourses = (function () {
    var local = localStorage.getItem("courses");
    var courses = [];
    if (!local) {
        $.get("JSON/courses.json", function (ret) {
            courses = ret;
            // localStorage.setItem("courses", JSON.stringify(courses));
            save();
        });
    }
    else {
        courses = JSON.parse(local);
        // courses = local;
        save();
    }

    function save() {

        localStorage.setItem("courses", JSON.stringify(courses));
        // localStorage.setItem("courses", courses);
    }

    function getCourses(tag, id) {
        // if (title && tag) {
        //     var tagFilter = courses.filter(c => c.tag.toLowerCase() === tag.toLowerCase());
        //     return tagFilter.filter(c => c.title.toLowerCase() === title.toLowerCase());
        // }
        // if (id)
        //     return courses.filter(c => c.id.toLowerCase() === id.toLowerCase());
        if (tag)
            return courses.filter(c => c.tag.toLowerCase() === tag.toLowerCase());
        return courses;
    }

    function addCourse(course) {
        courses.push(course);
        save();
    }

    function removeCourse(course) {
        var c = courses.filter(c => c.id === course.id);
        for (let i = 0; i < courses.length; i++) {
            const element = courses[i];
            if (element == c) {
                courses.splice(i, 1);
                save();
            }

        }
        if (c === -1) {
            return;
        }

    }

    function updateCourse(course) {
        var c = courses.filter(c => c.id === course.id);

        if (c === -1) {
            return;
        }
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