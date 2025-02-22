// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="description.html"><strong aria-hidden="true">1.</strong> Tárgyleírás</a></li><li class="chapter-item expanded "><a href="schedule.html"><strong aria-hidden="true">2.</strong> Ütemezés</a></li><li class="chapter-item expanded "><a href="literature.html"><strong aria-hidden="true">3.</strong> Felkészülést segítő anyagok</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="lectures/software_architecture.html"><strong aria-hidden="true">3.1.</strong> Software Architecture</a></li><li class="chapter-item "><a href="lectures/daily_work.html"><strong aria-hidden="true">3.2.</strong> Daily Work, Clean Code, Version Control</a></li><li class="chapter-item "><a href="lectures/agile_scrum_kanban.html"><strong aria-hidden="true">3.3.</strong> Agile, SCRUM, Kanban</a></li><li class="chapter-item "><a href="lectures/tdd.html"><strong aria-hidden="true">3.4.</strong> TDD, Unit Testing</a></li><li class="chapter-item "><a href="lectures/legacy_code.html"><strong aria-hidden="true">3.5.</strong> Legacy Code, SOLID</a></li><li class="chapter-item "><a href="lectures/review.html"><strong aria-hidden="true">3.6.</strong> Review</a></li><li class="chapter-item "><a href="lectures/ci.html"><strong aria-hidden="true">3.7.</strong> Continuous Integration</a></li><li class="chapter-item "><a href="mindmap.html"><strong aria-hidden="true">3.8.</strong> MindMap</a></li></ol></li><li class="chapter-item expanded "><a href="software.html"><strong aria-hidden="true">4.</strong> A feladat</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="sprints/sprints.html"><strong aria-hidden="true">4.1.</strong> Sprintek</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="sprints/sprint_1.html"><strong aria-hidden="true">4.1.1.</strong> Sprint 1</a></li><li class="chapter-item "><a href="sprints/sprint_2.html"><strong aria-hidden="true">4.1.2.</strong> Sprint 2</a></li></ol></li><li class="chapter-item "><a href="sprints_old/sprints.html"><strong aria-hidden="true">4.2.</strong> Sprintek [régi]</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="sprints_old/sprint_1.html"><strong aria-hidden="true">4.2.1.</strong> Sprint 1</a></li><li class="chapter-item "><a href="sprints_old/sprint_2.html"><strong aria-hidden="true">4.2.2.</strong> Sprint 2</a></li><li class="chapter-item "><a href="sprints_old/sprint_3.html"><strong aria-hidden="true">4.2.3.</strong> Sprint 3</a></li></ol></li><li class="chapter-item "><a href="demo.html"><strong aria-hidden="true">4.3.</strong> Demók</a></li><li class="chapter-item "><a href="sprints/convoy.html"><strong aria-hidden="true">4.4.</strong> Acceptance test</a></li></ol></li><li class="chapter-item expanded "><a href="working_environment.html"><strong aria-hidden="true">5.</strong> Munkakörnyezet</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="git.html"><strong aria-hidden="true">5.1.</strong> Git</a></li><li class="chapter-item "><a href="github.html"><strong aria-hidden="true">5.2.</strong> GitHub</a></li><li class="chapter-item "><a href="developing_tools.html"><strong aria-hidden="true">5.3.</strong> Fejlesztői eszközök</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="vs_code.html"><strong aria-hidden="true">5.3.1.</strong> Visual Studio Code</a></li><li class="chapter-item "><a href="intellij_rider.html"><strong aria-hidden="true">5.3.2.</strong> IntelliJ Rider</a></li><li class="chapter-item "><a href="intellij_idea.html"><strong aria-hidden="true">5.3.3.</strong> IntelliJ IDEA (Java)</a></li><li class="chapter-item "><a href="code_formatting.html"><strong aria-hidden="true">5.3.4.</strong> Kódformázás</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="csharp_style_guide.html"><strong aria-hidden="true">5.3.4.1.</strong> C#</a></li><li class="chapter-item "><a href="java_style_guide.html"><strong aria-hidden="true">5.3.4.2.</strong> Java</a></li></ol></li></ol></li><li class="chapter-item "><a href="workflow.html"><strong aria-hidden="true">5.4.</strong> Munkafolyamat</a></li></ol></li><li class="chapter-item expanded "><a href="implementation.html"><strong aria-hidden="true">6.</strong> Implementáció</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="virtual_world.html"><strong aria-hidden="true">6.1.</strong> Virtuális világ</a></li><li class="chapter-item "><a href="physics.html"><strong aria-hidden="true">6.2.</strong> Fizika</a></li><li class="chapter-item "><a href="sensors.html"><strong aria-hidden="true">6.3.</strong> Szenzorok</a></li><li class="chapter-item "><a href="functions.html"><strong aria-hidden="true">6.4.</strong> Vezetéstámogató funkciók</a></li><li class="chapter-item "><a href="reference_architecture.html"><strong aria-hidden="true">6.5.</strong> Referencia architektúra</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
