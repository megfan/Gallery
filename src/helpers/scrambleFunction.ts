
const CYCLES_PER_LETTER = 4;
const SHUFFLE_TIME = 30;

const CHARS = "DFUKC98745KHI97345";

 export const stopScramble = (intervalRef:any, setIndex: (e: number | null) => void) => {
    clearInterval(intervalRef.current || undefined);
    setIndex(null);
  };


export const scramble = (
    txt: string, 
    index: number, 
    intervalRef: any, 
    setText: (e: string) => void,
    setIndex: (e: number | null) => void,
) => {
    // let pos = 0;
    // intervalRef.current = setInterval(() => {
    //   const scrambled = txt.split("")
    //     .map((char, index) => {
    //       if (pos / CYCLES_PER_LETTER > index) {
    //         return char;
    //       }
    //       const randomCharIndex = Math.floor(Math.random() * CHARS.length);
    //       const randomChar = CHARS[randomCharIndex];
    //       return randomChar;
    //     })
    //     .join("");

    //   setText(scrambled);
    //   setIndex(index);
    //   pos++;

    //   if (pos >= txt.length * CYCLES_PER_LETTER) {
    //     stopScramble(intervalRef, setIndex);
    //   }
    // }, SHUFFLE_TIME);
  };


