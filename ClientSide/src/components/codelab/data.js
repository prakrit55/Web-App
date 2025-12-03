export const languages = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  "c++": "10.2.0",
  kotlin: "1.8.20",
  go: "1.16.2",
  julia: "1.8.5",
  brainfuck: "2.7.3",
  php: "8.2.3",
  matl: "22.5.0",
  bash: "5.2.0",
  befunge93: "0.2.0",
  bqn: "1.0.0",
  brachylog: "1.0.0",
  cjam: "0.6.5",
  clojure: "1.10.3",
  cobol: "3.1.2",
  coffeescript: "2.5.1",
  cow: "1.0.0",
  crystal: "0.36.1",
  dart: "2.19.6",
  dash: "0.5.11",
  "basic.net": "5.0.201",
  "fsharp.net": "5.0.201",
  "csharp.net": "5.0.201",
  fsi: "5.0.201",
  dragon: "1.9.8",
  elixir: "1.11.3",
  emacs: "27.1.0",
  emojicode: "1.0.2",
  erlang: "23.0.0",
  file: "0.0.1",
  forte: "1.0.0",
  forth: "0.7.3",
  freebasic: "1.9.0",
  awk: "5.1.0",
  c: "10.2.0",
  d: "10.2.0",
  fortran: "10.2.0",
  golfscript: "1.0.0",
  groovy: "3.0.7",
  haskell: "9.0.1",
  husk: "1.0.0",
  iverilog: "11.0.0",
  japt: "2.0.0",
  jelly: "0.1.31",
  lisp: "2.1.2",
  llvm_ir: "12.0.1",
  lolcode: "0.11.2",
  lua: "5.4.4",
  csharp: "6.12.0",
  basic: "6.12.0",
};

export const languageBoilerplate = {
  javascript: `// ZekiCoder LMS - JavaScript
console.log("Hello from ZekiCoder!");`,

  typescript: `// ZekiCoder LMS - TypeScript
const message: string = "Hello from ZekiCoder!";
console.log(message);`,

  python: `# ZekiCoder LMS - Python
print("Hello from ZekiCoder!")`,

  java: `// ZekiCoder LMS - Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from ZekiCoder!");
    }
}`,

  php: `<?php
// ZekiCoder LMS - PHP
echo "Hello from ZekiCoder!";
?>`,

  "c++": `// ZekiCoder LMS - C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello from ZekiCoder!" << endl;
    return 0;
}`,

  bash: `#!/bin/bash
// ZekiCoder LMS - Bash
echo "Hello from ZekiCoder!"`,

  befunge93: `"!redoCikeZ morf olleH">:#,_@`,

  bqn: `# ZekiCoder LMS - BQN
•Show "Hello from ZekiCoder!"`,

  brainfuck: `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`,

  clojure: `; ZekiCoder LMS - Clojure
(println "Hello from ZekiCoder!")`,

  crystal: `# ZekiCoder LMS - Crystal
puts "Hello from ZekiCoder!"`,

  dart: `// ZekiCoder LMS - Dart
void main() {
  print("Hello from ZekiCoder!");
}`,

  "basic.net": `' ZekiCoder LMS - Basic.NET
Module Program
    Sub Main()
        Console.WriteLine("Hello from ZekiCoder!")
    End Sub
End Module`,

  "fsharp.net": `// ZekiCoder LMS - F#
printfn "Hello from ZekiCoder!"`,

  "csharp.net": `// ZekiCoder LMS - C#
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello from ZekiCoder!");
    }
}`,

  elixir: `# ZekiCoder LMS - Elixir
IO.puts "Hello from ZekiCoder!"`,

  erlang: `% ZekiCoder LMS - Erlang
-module(main).
-export([start/0]).

start() ->
    io:format("Hello from ZekiCoder!~n").`,

  forth: `\\ ZekiCoder LMS - Forth
.( Hello from ZekiCoder!) CR`,

  awk: `# ZekiCoder LMS - AWK
BEGIN { print "Hello from ZekiCoder!" }`,

  c: `// ZekiCoder LMS - C
#include <stdio.h>

int main() {
    printf("Hello from ZekiCoder!\\n");
    return 0;
}`,

  d: `// ZekiCoder LMS - D
import std.stdio;

void main() {
    writeln("Hello from ZekiCoder!");
}`,

  fortran: `! ZekiCoder LMS - Fortran
program hello
    print *, "Hello from ZekiCoder!"
end program hello`,

  go: `// ZekiCoder LMS - Go
package main

import "fmt"

func main() {
    fmt.Println("Hello from ZekiCoder!")
}`,

  groovy: `// ZekiCoder LMS - Groovy
println "Hello from ZekiCoder!"`,

  haskell: `-- ZekiCoder LMS - Haskell
main = putStrLn "Hello from ZekiCoder!"`,

  julia: `# ZekiCoder LMS - Julia
println("Hello from ZekiCoder!")`,

  kotlin: `// ZekiCoder LMS - Kotlin
fun main() {
    println("Hello from ZekiCoder!")
}`,

  lisp: `; ZekiCoder LMS - Lisp
(format t "Hello from ZekiCoder!~%")`,

  lua: `-- ZekiCoder LMS - Lua
print("Hello from ZekiCoder!")`,

  csharp: `// ZekiCoder LMS - C#
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello from ZekiCoder!");
    }
}`,

  basic: `' ZekiCoder LMS - BASIC
PRINT "Hello from ZekiCoder!"
END`,

  brachylog: ``,
  cjam: ``,
  cobol: ``,
  cow: ``,
  dragon: ``,
  emacs: ``,
  emojicode: ``,
  file: ``,
  forte: ``,
  golfscript: ``,
  husk: ``,
  iverilog: ``,
  japt: ``,
  jelly: ``,
  llvm_ir: ``,
  lolcode: ``,
  matl: ``,
};
