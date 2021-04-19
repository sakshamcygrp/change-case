function change() {
    var ele = document.getElementsByName('output');
    var input = document.getElementById("input").value
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == 'lower')
            document.getElementById("result").innerHTML
                = "<b>Result: </b>"+ input.toLowerCase();

            else if(ele[i].value == 'upper')
            document.getElementById("result").innerHTML
                = "<b>Result: </b>"+ input.toUpperCase();

            else if(ele[i].value == 'pascal'){
                var temporary_text=input
            temporary_text = temporary_text.replace(/(\w)(\w*)/g,
                function(g0,g1,g2){ return g1.toUpperCase() + g2.toLowerCase();});
            document.getElementById("result").innerHTML
                = "<b>Result:</b>"+ temporary_text.replace(/ +/g, "");
            }

            else if(ele[i].value == 'snake'){
                const str = input;
                const snake = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toLowerCase());
                    }, []);
                    return snakeArr.join('_');
                };
                var output = snake(str);
                document.getElementById("result").innerHTML = "<b>Result:</b>"+ output;
            }

            else if(ele[i].value == 'upper_snake'){
                const str = input;
                const usnake = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toUpperCase());
                    }, []);
                    return snakeArr.join('_');
                };
                var output = usnake(str);
                document.getElementById("result").innerHTML = "<b>Result:</b>"+ output;
            }

            else if(ele[i].value == 'kebab'){
                const str = input;
                const kebab = (str = '') => {
                    const strArr = str.split(' ');
                    const snakeArr = strArr.reduce((acc, val) => {
                        return acc.concat(val.toLowerCase());
                    }, []);
                    return snakeArr.join('-');
                };
                var output = kebab(str);
                document.getElementById("result").innerHTML = "<b>Result:</b>"+ output;
            }

            else if(ele[i].value == 'camel'){
                input = input.replace(/[-\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
                camel = input.substr(0, 1).toLowerCase() + input.substr(1);
                document.getElementById("result").innerHTML = "<b>Result:</b>"+ camel;
            }
        }
    }
}