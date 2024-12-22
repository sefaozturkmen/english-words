"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Words } from "@/lib/constants";
import { useState, useEffect } from "react";

type Language = "en" | "tr";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [flip, setFlip] = useState(false);
  const [currentWord, setCurrentWord] = useState(Words[0]);

  useEffect(() => {
    setCurrentWord(Words[Math.floor(Math.random() * Words.length)]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button onClick={() => setLanguage(language === "tr" ? "en" : "tr")}>
        {language === "tr" ? "English to Turkish" : "Turkish to English"}
      </Button>
      <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            {flip
              ? currentWord[language === "tr" ? "en" : "tr"]
              : currentWord[language]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => setFlip(!flip)}
              className="w-full text-lg py-6 hover:scale-105 transition-transform"
            >
              {language === "tr" ? "Çevir" : "Flip"}
            </Button>
            <Button
              onClick={() => {
                setCurrentWord(Words[Math.floor(Math.random() * Words.length)]);
                setFlip(false);
              }}
              className="w-full text-lg py-6 hover:scale-105 transition-transform"
            >
              {language === "tr" ? "İleri" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <p className="text-sm text-gray-500">
        made with ❤️ by{" "}
        <a href="https://github.com/sefaozturkmen" className="text-blue-500">
          sefaozturkmen
        </a>
      </p>
    </div>
  );
}
