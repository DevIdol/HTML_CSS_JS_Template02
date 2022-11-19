$(document).ready(function () {
    $(".menu-toggle").on("click", function () {
        var topVal = 0;
        if ($(this).hasClass("active")) {
            topVal = -980;
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $(".g-nav").stop().animate(
            {
                top: topVal,
            },
            400
        );
        $(".g-nav a").click(function () {
            $(".menu-toggle").removeClass("active");
            $(".g-nav").stop().animate(
                {
                    top: -980,
                },
                400
            );
        });
    });
});
