/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
const page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("c");

  const updateIframe = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className={styles.container}>
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={updateIframe}
        className={styles.languageSelect}
      >
        <optgroup label="Programming Languages">
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="nodejs">NodeJS</option>
          <option value="javascript">JavaScript</option>
          <option value="groovy">Groovy</option>
          <option value="jshell">JShell</option>
          <option value="haskell">Haskell</option>
          <option value="tcl">Tcl</option>
          <option value="lua">Lua</option>
          <option value="ada">Ada</option>
          <option value="commonlisp">Common Lisp</option>
          <option value="d">D</option>
          <option value="elixir">Elixir</option>
          <option value="erlang">Erlang</option>
          <option value="fsharp">F#</option>
          <option value="fortran">Fortran</option>
          <option value="assembly">Assembly</option>
          <option value="scala">Scala</option>
          <option value="php">PHP</option>
          <option value="python2">Python2</option>
          <option value="csharp">C#</option>
          <option value="perl">Perl</option>
          <option value="ruby">Ruby</option>
          <option value="go">Go</option>
          <option value="r">R</option>
          <option value="racket">Racket</option>
          <option value="ocaml">OCaml</option>
          <option value="vbnet">Visual Basic (VB.NET)</option>
          <option value="basic">Basic</option>
          <option value="bash">Bash</option>
          <option value="clojure">Clojure</option>
          <option value="typescript">TypeScript</option>
          <option value="cobol">Cobol</option>
          <option value="kotlin">Kotlin</option>
          <option value="pascal">Pascal</option>
          <option value="prolog">Prolog</option>
          <option value="rust">Rust</option>
          <option value="swift">Swift</option>
          <option value="objectivec">Objective-C</option>
          <option value="octave">Octave</option>
          <option value="text">Text</option>
          <option value="brainfk">BrainFK</option>
          <option value="coffeescript">CoffeeScript</option>
          <option value="ejs">EJS</option>
        </optgroup>
        <optgroup label="Frontend Frameworks">
          <option value="html">HTML</option>
          <option value="materialize">Materialize</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="jquery">JQuery</option>
          <option value="foundation">Foundation</option>
          <option value="bulma">Bulma</option>
          <option value="uikit">Uikit</option>
          <option value="semanticui">Semantic UI</option>
          <option value="skeleton">Skeleton</option>
          <option value="milligram">Milligram</option>
          <option value="papercss">PaperCSS</option>
          <option value="backbonejs">BackboneJS</option>
        </optgroup>
        <optgroup label="Databases">
          <option value="mysql">MySQL</option>
          <option value="oracle">Oracle Database</option>
          <option value="postgresql">PostgreSQL</option>
          <option value="mongodb">MongoDB</option>
          <option value="sqlite">SQLite</option>
          <option value="redis">Redis</option>
          <option value="mariadb">MariaDB</option>
          <option value="plsql">Oracle PL/SQL</option>
          <option value="sqlserver">Microsoft SQL Server</option>
        </optgroup>
      </select>
      <iframe
        id="compilerIframe"
        src={`https://onecompiler.com/embed/${selectedLanguage}`}
        className={styles.iframe}
        title="OneCompiler Embed"
      ></iframe>
    </div>
  );
};

export default page;
