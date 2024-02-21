function areYouPlayingBanjo(name) {
  const predicate =
    name[0].toLowerCase() === "r" ? " plays banjo" : " does not play banjo";
  return name + predicate
}


