/**
 * AutoMarket - Dynamic Blog Details Page Renderer (blog-details.js)
 * Populates blog-details.html from window.AUTOMARKET_BLOG_POSTS based on ?id= query parameter.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  if (typeof window.AUTOMARKET_BLOG_POSTS === 'undefined') {
    console.warn('blog-data.js must be loaded before blog-details.js');
    return;
  }

  // 1. Get Article ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');
  const post = window.getBlogPostById(rawId || 1);

  if (!post) return;

  // 2. Update Document Title & Meta Description
  document.title = `${post.title} | AutoMarket Guides`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', post.summary);
  }

  // 3. Update Breadcrumb
  const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
  if (breadcrumbActive) {
    breadcrumbActive.textContent = post.title.length > 40 ? post.title.substring(0, 37) + '...' : post.title;
  }

  // 4. Update Article Category Badge & Title
  const categoryBadge = document.getElementById('articleCategoryBadge');
  if (categoryBadge) {
    categoryBadge.className = `badge ${post.badgeClass === 'badge-featured' ? 'bg-warning text-dark' : 'bg-primary text-white'} mb-2 px-3 py-2 rounded-pill fw-bold`;
    categoryBadge.textContent = post.categoryLabel;
  }

  const articleTitle = document.getElementById('articleTitle');
  if (articleTitle) {
    articleTitle.textContent = post.title;
  }

  // 5. Update Meta Row (Author, Date, Read Time)
  const metaRow = document.getElementById('articleMetaRow');
  if (metaRow) {
    metaRow.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <img src="${post.author.avatar}" alt="${post.author.name}" class="rounded-circle" style="width: 38px; height: 38px; object-fit: cover;">
        <span class="fw-semibold text-main">${post.author.name}</span>
      </div>
      <span>•</span>
      <span><i class="bi bi-calendar3 me-1"></i> ${post.date}</span>
      <span>•</span>
      <span><i class="bi bi-clock me-1"></i> ${post.readTime}</span>
    `;
  }

  // 6. Update Hero Image
  const heroImg = document.getElementById('articleHeroImg');
  if (heroImg) {
    heroImg.src = post.heroImage;
    heroImg.alt = post.title;
  }

  // 7. Update Article Lead & Body Content
  const leadEl = document.getElementById('articleLead');
  if (leadEl) {
    leadEl.textContent = post.lead;
  }

  const bodyEl = document.getElementById('articleBodyContent');
  if (bodyEl) {
    bodyEl.innerHTML = post.contentHtml;
  }

  // 8. Update Tags
  const tagsContainer = document.getElementById('articleTagsContainer');
  if (tagsContainer) {
    tagsContainer.innerHTML = post.tags.map(t => `<span class="badge bg-secondary-subtle text-secondary me-1 mb-1">${t}</span>`).join('');
  }

  // 9. Update Author Bio Card
  const authorCard = document.getElementById('articleAuthorCard');
  if (authorCard) {
    authorCard.innerHTML = `
      <img src="${post.author.avatar}" alt="${post.author.name}" class="rounded-circle" style="width: 80px; height: 80px; object-fit: cover;">
      <div>
        <h5 class="fw-bold mb-1">Written by ${post.author.name}</h5>
        <div class="text-primary small fw-semibold mb-2">${post.author.role}</div>
        <p class="small text-muted mb-0">${post.author.bio}</p>
      </div>
    `;
  }

  // 10. Update Comments List & Counter
  const commentsHeading = document.getElementById('commentsHeading');
  if (commentsHeading) {
    commentsHeading.innerHTML = `<i class="bi bi-chat-left-dots text-primary me-2"></i> Reader Comments (${post.comments.length})`;
  }

  const commentsList = document.getElementById('articleCommentsList');
  if (commentsList) {
    commentsList.innerHTML = post.comments.map(c => `
      <div class="d-flex gap-3 mb-4 comment-item">
        <img src="${c.avatar}" alt="${c.name}" class="rounded-circle" style="width: 48px; height: 48px; object-fit: cover;">
        <div class="p-3 bg-body-tertiary rounded-3 flex-grow-1 border">
          <div class="d-flex justify-content-between mb-1">
            <h6 class="fw-bold mb-0">${c.name}</h6>
            <small class="text-muted">${c.date}</small>
          </div>
          <p class="small mb-0 text-body">${c.text}</p>
        </div>
      </div>
    `).join('');
  }

  // 11. Handle Comment Submission
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = commentForm.querySelector('input[type="text"]');
      const commentInput = commentForm.querySelector('textarea');
      
      if (!nameInput.value.trim() || !commentInput.value.trim()) {
        commentForm.classList.add('was-validated');
        return;
      }

      const newComment = {
        name: nameInput.value.trim(),
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
        date: 'Just now',
        text: commentInput.value.trim()
      };

      post.comments.unshift(newComment);

      if (commentsHeading) {
        commentsHeading.innerHTML = `<i class="bi bi-chat-left-dots text-primary me-2"></i> Reader Comments (${post.comments.length})`;
      }

      if (commentsList) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'd-flex gap-3 mb-4 comment-item';
        commentDiv.innerHTML = `
          <img src="${newComment.avatar}" alt="${newComment.name}" class="rounded-circle" style="width: 48px; height: 48px; object-fit: cover;">
          <div class="p-3 bg-body-tertiary rounded-3 flex-grow-1 border">
            <div class="d-flex justify-content-between mb-1">
              <h6 class="fw-bold mb-0">${newComment.name}</h6>
              <small class="text-success fw-bold">Just now</small>
            </div>
            <p class="small mb-0 text-body">${newComment.text}</p>
          </div>
        `;
        commentsList.prepend(commentDiv);
      }

      commentForm.reset();
      commentForm.classList.remove('was-validated');

      if (typeof window.showToast === 'function') {
        window.showToast('Your comment has been posted successfully!', 'success');
      }
    });
  }

  // 12. Update Related / Recent Guides in Sidebar
  const relatedContainer = document.getElementById('sidebarRecentPosts');
  if (relatedContainer) {
    const relatedPosts = window.getRelatedBlogPosts(post.id, 3);
    relatedContainer.innerHTML = relatedPosts.map(rel => `
      <div class="d-flex gap-3 mb-3 align-items-center">
        <a href="blog-details.html?id=${rel.id}" class="flex-shrink-0">
          <img src="${rel.heroImage}" alt="${rel.title}" class="rounded-3 shadow-sm" style="width: 70px; height: 70px; object-fit: cover;">
        </a>
        <div>
          <h6 class="small fw-bold mb-1">
            <a href="blog-details.html?id=${rel.id}" class="text-decoration-none text-main">${rel.title}</a>
          </h6>
          <small class="text-muted"><i class="bi bi-calendar3 me-1"></i> ${rel.date}</small>
        </div>
      </div>
    `).join('');
  }
});