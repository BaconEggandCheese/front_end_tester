// MAIN FUNCTION: update the output based on what is entered in the panels
        function updateOutput() {
                
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
                
                document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
                
        }
           // END MAIN FUNCTION  
           
           
             
            // Functions to change highlighting of buttons
            $(".toggleButton").hover(function() {
                
                $(this).addClass("highlightedButton");
                
            }, function() {
                
                $(this).removeClass("highlightedButton");
                
            });
            
             $(".themeButton").hover(function() {
                
                $(this).addClass("highlightedButton");
                
            }, function() {
                
                $(this).removeClass("highlightedButton");
                
            });
            
             $("#settings").hover(function() {
                
                $(this).addClass("highlightedButton");
                
            }, function() {
                
                $(this).removeClass("highlightedButton");
                
            });
            
            // END functions to change highlighting of buttons
            
            $(".toggleButton").click(function() {
                
                $(this).toggleClass("active");
                
                $(this).removeClass("highlightedButton");
                
                var panelId = $(this).attr("id") + "Panel";
                
                $("#" + panelId).toggleClass("hidden");
                
                var numberOfActivePanels = 4 - $('.hidden').length;
                
                $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
                
            });
            
            $("#dark").click(function() {
                $("#light").removeClass("active");
                
                $(this).addClass("active");
                
                $("#header").css("backgroundColor", "#272822");
                
                $("#logo").css("color", "#fff");
                
                $("textarea").css("backgroundColor", "#8F908A");
                
            });
            
            $("#light").click(function() {
                $("#dark").removeClass("active");
                
                $(this).addClass("active");
                
                $("#header").css("backgroundColor", "#EEE");
                
                $("#logo").css("color", "#000");
                
                $("textarea").css("backgroundColor", "#fff");
                
            });
            
            $(".panel").height($(window).height() - $("#header").height() - 15);
            
            $(".panel").width(($(window).width() / 2) - 10);
            
            updateOutput();
            
            $("textarea").on('change keyup paste', function() {
    
                updateOutput();
                
                
            });