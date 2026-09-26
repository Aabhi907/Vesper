"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface TextThreeProps {
  /** Text to type out. If words array is provided, words takes precedence */
  text?: string
  /** Array of words/phrases to cycle through with typewriter effect */
  words?: string[]
  /** Typing speed in ms per character (default: 110) */
  typingSpeed?: number
  /** Deletion speed in ms per character (default: 60) */
  deletingSpeed?: number
  /** Pause duration at the end of word in ms (default: 2200) */
  pauseDuration?: number
  /** Custom class for the wrapper text */
  className?: string
  /** Custom class for the cursor */
  cursorClassName?: string
  /** Whether to show the blinking cursor (default: true) */
  showCursor?: boolean
  /** Cursor symbol (default: "|") */
  cursor?: string
}

export default function TextThree({
  text = "Vesper",
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDuration = 2200,
  className = "",
  cursorClassName = "",
  showCursor = true,
  cursor = "|",
}: TextThreeProps) {
  const wordList = React.useMemo(() => {
    if (words && words.length > 0) return words
    return [text]
  }, [words, text])

  const [currentWordIndex, setCurrentWordIndex] = React.useState(0)
  const [currentText, setCurrentText] = React.useState("")
  const [isDeleting, setIsDeleting] = React.useState(false)

  const activeWord = wordList[currentWordIndex] || ""

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    if (!isDeleting && currentText === activeWord) {
      // Finished typing current word, pause before deleting if multiple words
      if (wordList.length > 1) {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % wordList.length)
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? activeWord.substring(0, currentText.length - 1)
          : activeWord.substring(0, currentText.length + 1)
        setCurrentText(nextText)
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, activeWord, wordList.length, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`inline-flex items-baseline font-inherit ${className}`}>
      <span>{currentText}</span>
      {showCursor && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className={`inline-block ml-1 sm:ml-2 w-[2px] sm:w-[2.5px] h-[0.78em] bg-black dark:bg-white rounded-full align-middle select-none ${cursorClassName}`}
        />
      )}
    </span>
  )

}

export { TextThree }
