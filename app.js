// Flatten: visitors act as the audience. Posts they do not like lose their
// context round by round (full caption -> short caption -> hashtags -> faded).

const LIKES_PER_ROUND = 3; // attention is limited, like a real feed
const MAX_STAGE = 3;       // 0 full, 1 short, 2 tags only, 3 faded
const BRAND_THRESHOLD = 3; // show the "brand" once this few posts remain visible

const PALETTE = ["#b45309", "#0f766e", "#7c3aed", "#be123c", "#1d4ed8", "#4d7c0f", "#a21caf", "#0e7490", "#9a3412"];

const state = {
  round: 1,
  stages: new Map(),   // post id -> stage
  liked: new Set(),    // post ids liked this round
  done: false
};

const el = {
  feed: document.getElementById("feed"),
  round: document.getElementById("round"),
  likesLeft: document.getElementById("likes-left"),
  visible: document.getElementById("visible"),
  next: document.getElementById("next"),
  restore: document.getElementById("restore"),
  brand: document.getElementById("brand"),
  brandTags: document.getElementById("brand-tags")
};

function reset() {
  state.round = 1;
  state.liked.clear();
  state.done = false;
  window.POSTS.forEach(p => state.stages.set(p.id, 0));
  render();
}

function captionFor(post, stage) {
  if (stage === 0) return post.full;
  if (stage === 1) return post.short;
  return "";
}

function visiblePosts() {
  return window.POSTS.filter(p => state.stages.get(p.id) < MAX_STAGE);
}

function photoNode(post, index) {
  if (post.image) {
    const img = document.createElement("img");
    img.className = "photo";
    img.src = post.image;
    img.alt = post.short;
    img.loading = "lazy";
    // If the photo fails to load, fall back to a coloured tile.
    img.addEventListener("error", () => img.replaceWith(tileNode(post, index)), { once: true });
    return img;
  }
  return tileNode(post, index);
}

function tileNode(post, index) {
  const tile = document.createElement("div");
  tile.className = "photo";
  const c = PALETTE[index % PALETTE.length];
  tile.style.background = `linear-gradient(135deg, ${c}, ${c}88)`;
  tile.textContent = post.label;
  tile.setAttribute("role", "img");
  tile.setAttribute("aria-label", post.short);
  return tile;
}

function render() {
  el.feed.replaceChildren();

  window.POSTS.forEach((post, i) => {
    const stage = state.stages.get(post.id);
    const isLiked = state.liked.has(post.id);

    const card = document.createElement("article");
    card.className = "post" + (isLiked ? " liked" : "");
    card.dataset.stage = stage;

    const body = document.createElement("div");
    body.className = "body";

    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = captionFor(post, stage);

    const tags = document.createElement("p");
    tags.className = "tags";
    tags.textContent = post.tags.join(" ");

    const like = document.createElement("button");
    like.type = "button";
    like.className = "like";
    like.setAttribute("aria-pressed", String(isLiked));
    like.textContent = isLiked ? "Liked" : "Like";
    like.disabled = state.done || (!isLiked && state.liked.size >= LIKES_PER_ROUND);
    like.addEventListener("click", () => toggleLike(post.id));

    body.append(caption, tags, like);
    card.append(photoNode(post, i), body);
    el.feed.append(card);
  });

  el.round.textContent = state.round;
  el.likesLeft.textContent = LIKES_PER_ROUND - state.liked.size;
  el.visible.textContent = visiblePosts().length;
  el.next.disabled = state.done;
  el.brand.hidden = !state.done;
}

function toggleLike(id) {
  if (state.liked.has(id)) state.liked.delete(id);
  else if (state.liked.size < LIKES_PER_ROUND) state.liked.add(id);
  render();
}

function nextRound() {
  // Every visible post the audience skipped loses one layer of context.
  window.POSTS.forEach(p => {
    const s = state.stages.get(p.id);
    if (!state.liked.has(p.id) && s < MAX_STAGE) state.stages.set(p.id, s + 1);
  });
  state.liked.clear();
  state.round += 1;

  const remaining = visiblePosts();
  if (remaining.length <= BRAND_THRESHOLD) {
    state.done = true;
    const tags = [...new Set(remaining.flatMap(p => p.tags))];
    el.brandTags.textContent = tags.length ? tags.join(" ") : "(nothing left)";
  }
  render();
}

el.next.addEventListener("click", nextRound);
el.restore.addEventListener("click", reset);

reset();
