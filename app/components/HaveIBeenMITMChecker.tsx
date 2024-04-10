"use client";

import { useState } from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";

export function HaveIBeenMITMChecker() {
  const [diagnosticResult, setDiagnosticResult] = useState("");
  const [loading, setLoading] = useState(false);

  const runDiagnostic = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://cdn.statically.io/gh/fransallen/haveibeenmitm/main/status.txt",
        {
          method: "GET",
        },
      );
      const contentType = response.headers.get("content-type");

      if (contentType === "text/plain; charset=utf-8") {
        setDiagnosticResult("Your internet is not intercepted");
      } else {
        setDiagnosticResult("Your internet is being intercepted");
      }
    } catch (error) {
      setDiagnosticResult("Error occurred during the diagnostic");
      console.error("Diagnostic error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={runDiagnostic}
        disabled={loading}
        className="px-4 py-1 border border-slate-300 rounded-lg hover:text-black/90 hover:shadow transition duration-150 flex items-center gap-x-1 mx-auto"
      >
        {loading ? "Running Diagnostic..." : "Run Diagnostic"}
      </button>
      <div id="result">
        {diagnosticResult && (
          <div>
            <div className="flex justify-center mt-8 text-7xl">
              {diagnosticResult.includes("not intercepted") ? (
                <HiCheckCircle className="text-green-500" />
              ) : (
                <HiXCircle className="text-red-500" />
              )}
            </div>
            <p>{diagnosticResult}</p>
          </div>
        )}
      </div>
    </div>
  );
}
