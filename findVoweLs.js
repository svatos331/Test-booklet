findVoweLs = (params) => {
    let i = 0
    for (let j = 0; j < params.length; j++) {
        switch (params[j]) {
            case "a":
                i ++
                break;
            case "e":
                i ++
                break;
            case "i":
                i ++
                break;
            case "o":
                i ++
                break;
            case "u":
                i ++
                break;
        }

    }

return i
}