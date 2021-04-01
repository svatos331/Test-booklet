anagram = (str_1, str_2) => {
    if (str_1.length == str_2.length) {
      return (
        str_1.toLowerCase().split("").sort().join() ===
        str_2.toLowerCase().split("").sort().join()
      );
    } else {
      return false;
    }
  }
