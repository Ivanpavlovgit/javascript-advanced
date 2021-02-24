function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const btns = document.querySelectorAll('button');


    const map = {
        encode: {
            text: textAreas[0],
            btn: btns[0],
            func:(char)=>String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            text: textAreas[1],
            btn: btns[1],
            func:(char)=>String.fromCharCode(char.charCodeAt(0) - 1)
        }
    }

    function code(event) {
        if (event.target.tagName !== 'BUTTON') {
            return;
        }
        const type = event.target.textContent
            .toLowerCase()
            .trim()
            .includes('encode') ? 'encode' : 'decode';
        const message = map[type].text.value.split('').map(map[type].func).join('');


       map.encode.text.value='';
       map.decode.text.value=message;
    }

    document.getElementById('main').addEventListener('click', code);
}