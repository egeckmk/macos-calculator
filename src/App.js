import { useState, useEffect } from "react";

function App() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  useEffect(() => {
    const screen = document.getElementById("screen");
    if (
      removeSpaces(calc.num).length > 0 &&
      removeSpaces(calc.num).length < 7
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      }
      screen.classList.add("text-5xl");
    } else if (
      removeSpaces(calc.num).length >= 7 &&
      removeSpaces(calc.num).length < 13
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-3xl");
    } else if (
      removeSpaces(calc.num).length >= 13 &&
      removeSpaces(calc.num).length < 16
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-xl");
    } else {
      if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-lg");
    }
  }, [calc.num]);

  useEffect(() => {
    const screen = document.getElementById("screen");
    if (
      removeSpaces(calc.res).length > 0 &&
      removeSpaces(calc.res).length < 7
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      }
      screen.classList.add("text-5xl");
    } else if (
      removeSpaces(calc.res).length >= 7 &&
      removeSpaces(calc.res).length < 13
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-3xl");
    } else if (
      removeSpaces(calc.res).length >= 13 &&
      removeSpaces(calc.res).length < 16
    ) {
      if (screen.classList.contains("text-lg")) {
        screen.classList.remove("text-lg");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-xl");
    } else {
      if (screen.classList.contains("text-xl")) {
        screen.classList.remove("text-xl");
      } else if (screen.classList.contains("text-2xl")) {
        screen.classList.remove("text-2xl");
      } else if (screen.classList.contains("text-3xl")) {
        screen.classList.remove("text-3xl");
      } else if (screen.classList.contains("text-5xl")) {
        screen.classList.remove("text-5xl");
      }
      screen.classList.add("text-lg");
    }
  }, [calc.res]);
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const removeSpaces = (num) => num.toString().replace(/\s/g, "");

  const math = (res, num, sign) =>
    sign === "+"
      ? res + num
      : sign === "-"
      ? res - num
      : sign === "*"
      ? res * num
      : res / num;

  const numClickHandle = (e) => {
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && e.target.value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + e.target.value)))
            : toLocaleString(calc.num + e.target.value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const invertClickHandle = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandle = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const commaClickHandle = (e) => {
    setCalc({
      ...calc,
      num: !calc.num.toString.includes(".")
        ? calc.num + e.target.value
        : calc.num,
    });
  };

  const signClickHandle = (e) => {
    setCalc({
      ...calc,
      sign: e.target.value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandle = () => {
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with zero"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const resetClickHandle = (e) => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-block mx-6 my-4 shadow-[0px_25px_30px_25px_rgba(0,0,0,0.2)] rounded-2xl">
        <div
          className="flex items-end justify-end bg-[#49423F] rounded-t-2xl pr-2 pb-2 text-white font-thin h-28 text-5xl"
          id="screen"
        >
          {calc.num ? calc.num : calc.res}
        </div>
        <div>
          <button
            onClick={resetClickHandle}
            className="bg-[#57524F] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="c"
          >
            C
          </button>
          <button
            onClick={invertClickHandle}
            className="bg-[#57524F] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="+/-"
          >
            +/-
          </button>
          <button
            onClick={percentClickHandle}
            className="bg-[#57524F] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="%"
          >
            %
          </button>
          <button
            onClick={signClickHandle}
            className="bg-[#FFAA2B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:brightness-[.8] focus:border-[2px]"
            value="/"
          >
            ÷
          </button>
        </div>
        <div>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="7"
          >
            7
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="8"
          >
            8
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="9"
          >
            9
          </button>
          <button
            onClick={signClickHandle}
            className="bg-[#FFAA2B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:brightness-[.8] focus:border-[2px]"
            value="*"
          >
            x
          </button>
        </div>
        <div>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="4"
          >
            4
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="5"
          >
            5
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="6"
          >
            6
          </button>
          <button
            onClick={signClickHandle}
            className="bg-[#FFAA2B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:brightness-[.8] focus:border-[2px]"
            value="-"
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="1"
          >
            1
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="2"
          >
            2
          </button>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="3"
          >
            3
          </button>
          <button
            onClick={signClickHandle}
            className="bg-[#FFAA2B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:brightness-[.8] focus:border-[2px]"
            value="+"
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={numClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] rounded-bl-2xl w-40 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="0"
          >
            0
          </button>
          <button
            onClick={commaClickHandle}
            className="bg-[#817D7B] text-white p-2 border-[1px] border-[#5A5552] w-20 h-20 text-2xl cursor-pointer outline-none active:opacity-80"
            value="."
          >
            .
          </button>
          <button
            onClick={equalsClickHandle}
            className="bg-[#FFAA2B] text-white p-2 border-[1px] border-[#5A5552] rounded-br-2xl w-20 h-20 text-2xl cursor-pointer outline-none active:brightness-[.8]"
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
