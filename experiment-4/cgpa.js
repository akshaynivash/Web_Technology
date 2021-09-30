
        //button function
        //querySelector to  call var
        window.onload = function () {
            document.querySelector(".submitBtn").addEventListener("click", function () {
                var number_of_semester_obj = document.querySelector("input[name=number_of_semester]");
                number_of_semester = parseInt(number_of_semester_obj.value);

                html = ''; // sem innerhtml(Add)
                for (i = 1; i <= number_of_semester; i++) {
                    html += '<div class="nofsem" id="sem' + i + '">';
                    html += '<label class="semno">' + ordinal_suffix_of(i) + ' Sem : </label>';
                    html += '<input type="number" name="sem" required="" id="sem_mark' + i + '" class="form-control sem" placeholder="Enter the Marks of ' + ordinal_suffix_of(i) + ' Sem">';
                    html += '</div>';
                }

                html += '<button type="button" class ="btn btn-primary  mt-3 " id="calc_marks">Calculate Marks</button>';

                document.getElementById("semester_marks").innerHTML = html;
            });

            document.addEventListener('click', function (e) {
                if (e.target && e.target.id && e.target.id == 'calc_marks') {
                    var number_of_semester_obj = document.querySelector("input[name=number_of_semester]");
                    number_of_semester = parseInt(number_of_semester_obj.value);

                    total_marks = 0;
                    for (i = 1; i <= number_of_semester; i++) {
                        var sem_mark = document.getElementById("sem_mark" + i).value;
                        total_marks += parseInt(sem_mark);
                    }

                    document.getElementById("marks").classList.remove("d-none");

                    document.getElementById("average_result").innerHTML = total_marks / number_of_semester;
                    document.getElementById("equivalent_percentage").innerHTML = total_marks / number_of_semester;
                }
            });
        };

        function ordinal_suffix_of(i) {
            var j = i % 10,
                k = i % 100;
            if (j == 1 && k != 11) {
                return i + "st";
            }
            if (j == 2 && k != 12) {
                return i + "nd";
            }
            if (j == 3 && k != 13) {
                return i + "rd";
            }
            return i + "th";
        }
