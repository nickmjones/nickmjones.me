export default function Button({children}) {
  return(
    <span class="inline-block bg-rosePine-surface text-rosePine-subtle px-5 py-4 rounded-full cursor-default hover:bg-rosePine-overlay transition-all">
      {children}
    </span>
  )
}