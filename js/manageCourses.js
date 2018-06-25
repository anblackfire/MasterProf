const ManageCourses = (function () {
    var local = localStorage.getItem("courses");
    var courses = [];
    if (!local) {
        $.get("JSON/courses.json", function (ret) {
            courses = ret;
            
            save();
        });
    }
    else {
        courses = JSON.parse(local);        
        save();
    }

    function save() {

        localStorage.setItem("courses", JSON.stringify(courses));
       
    }

    function getCourses(tag, id) {        
        if (tag)
            return courses.filter(c => c.tag.toLowerCase() === tag.toLowerCase());
        return courses;
    }

    function addCourse(course) {
        courses.push(course);
        save();
    }

    function removeCourse(course) {
        var c = courses.indexOf(course);        
        if (c === -1) {
            return;
        }
        courses.splice(c, 1);
        save();
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
