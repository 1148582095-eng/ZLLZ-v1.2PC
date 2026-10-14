"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef<boolean>(false);

  useEffect(() => {
    // If URL has tab parameter for external jump targets, handle redirect if configured
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab") || window.location.hash.replace(/^#\/?/, "");
      if (tabParam === "mt") {
        const mtLink = localStorage.getItem("custom_link_mt");
        if (mtLink) {
          window.location.replace(mtLink);
          return;
        }
      } else if (tabParam === "h5" || tabParam === "mobile") {
        const mobileLink = localStorage.getItem("custom_link_mobile");
        if (mobileLink) {
          window.location.replace(mobileLink);
          return;
        }
      }
    }

    if (scriptInjectedRef.current) return;
    scriptInjectedRef.current = true;

    // Load prototype script natively into the document DOM without interfering with React's node reconciliation
    const existing = document.getElementById("prototype-native-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "prototype-native-script";
      script.src = "./prototype.js?v=login-enter-20261013";
      script.async = false;
      script.onload = () => {
        if (typeof window !== "undefined" && (window as unknown as { lucide?: { createIcons: () => void } }).lucide) {
          (window as unknown as { lucide: { createIcons: () => void } }).lucide.createIcons();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  // Native Next.js DOM Structure for PC (No iframe! All DOM elements selectable!)
  return (
    <div className="app">
      <header className="top">
        <div className="top-inner">
          <div className="brand flex items-center">
            <img className="brand-logo" src="./brand-logo.png" alt="正营用 wxb.cn" />
            <div className="system-name">指令流转中心</div>
            <div className="org">台湾省网信办</div>
          </div>
          <div className="tools">
            <button className="guide-return-btn" data-action="open-guide">
              返回统一入口
            </button>
            <button className="tool-circle" data-pop="todo" title="待办">
              <i data-lucide="calendar-days" width="18"></i>
              <span className="dot"></span>
            </button>
            <button className="tool-circle" data-pop="notice" title="通知">
              <i data-lucide="bell" width="18"></i>
              <span className="dot"></span>
            </button>
            <button className="tool-circle" data-pop="service" title="客服">
              <i data-lucide="headphones" width="18"></i>
            </button>
            <div className="user-profile-menu-container" id="user-profile-menu-container">
              <button
                type="button"
                className="user-profile-trigger"
                id="user-profile-trigger"
                data-action="toggle-user-menu"
                title="点击切换演示用户"
              >
                <div className="avatar" id="top-user-avatar">
                  武甲
                </div>
                <span className="user-name" id="top-user-name">
                  武甲<i data-lucide="chevron-down" width="14" height="14"></i>
                </span>
              </button>
              <div className="user-profile-dropdown" id="user-profile-dropdown">
                <div className="user-dropdown-header">
                  <div className="user-dropdown-title">
                    <i data-lucide="users-round" width="14"></i>切换演示用户
                  </div>
                  <span className="user-dropdown-sub">快速模拟不同岗位角色的指令权限与视角</span>
                </div>
                <div className="user-dropdown-list">
                  <button
                    type="button"
                    className="user-dropdown-item active"
                    data-action="switch-demo-user"
                    data-user="武甲"
                  >
                    <div className="user-item-avatar">武甲</div>
                    <div className="user-item-info">
                      <div className="user-item-name-row">
                        <span className="user-item-name">武甲</span>
                        <span className="user-item-role-tag">主管/下发</span>
                      </div>
                      <span className="user-item-duty">综合处 · 指令下发、统筹监管与审核</span>
                    </div>
                    <div className="user-item-check">
                      <i data-lucide="check" width="16"></i>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="user-dropdown-item"
                    data-action="switch-demo-user"
                    data-user="武乙"
                  >
                    <div className="user-item-avatar">武乙</div>
                    <div className="user-item-info">
                      <div className="user-item-name-row">
                        <span className="user-item-name">武乙</span>
                        <span className="user-item-role-tag">专班办理</span>
                      </div>
                      <span className="user-item-duty">处置专班 · 舆情接单处置、回执与转办</span>
                    </div>
                    <div className="user-item-check">
                      <i data-lucide="check" width="16"></i>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="user-dropdown-item"
                    data-action="switch-demo-user"
                    data-user="武丙"
                  >
                    <div className="user-item-avatar">武丙</div>
                    <div className="user-item-info">
                      <div className="user-item-name-row">
                        <span className="user-item-name">武丙</span>
                        <span className="user-item-role-tag">安全技术</span>
                      </div>
                      <span className="user-item-duty">网络安全科 · 协同会商与技术核验</span>
                    </div>
                    <div className="user-item-check">
                      <i data-lucide="check" width="16"></i>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="user-dropdown-item"
                    data-action="switch-demo-user"
                    data-user="武丁"
                  >
                    <div className="user-item-avatar">武丁</div>
                    <div className="user-item-info">
                      <div className="user-item-name-row">
                        <span className="user-item-name">武丁</span>
                        <span className="user-item-role-tag">综合值班</span>
                      </div>
                      <span className="user-item-duty">值班室 · 待阅接单流转督办</span>
                    </div>
                    <div className="user-item-check">
                      <i data-lucide="check" width="16"></i>
                    </div>
                  </button>
                </div>
                <div className="user-dropdown-footer">
                  <i data-lucide="info" width="13"></i> 点击即可切换角色视角并联动刷新指令数据
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-item nav-home" data-action="open-guide" title="返回统一入口">
            <i data-lucide="house" width="18"></i>
          </button>
          <button className="nav-item active" data-page="todo">
            <i data-lucide="clipboard-list" width="16"></i>我的指令
          </button>
          <button className="nav-item" data-page="issue-dispatch">
            <i data-lucide="send" width="16"></i>下发指令
          </button>
          <button className="nav-item" data-page="sent-mgmt">
            <i data-lucide="house" width="16"></i>指令监控
          </button>
          <button className="nav-item" data-page="stats">
            <i data-lucide="bar-chart-3" width="16"></i>统计管理
          </button>
          <button className="nav-item" data-page="external">
            <i data-lucide="users" width="16"></i>外部联系人
          </button>
          <button className="nav-item" data-page="templates">
            <i data-lucide="layout-template" width="16"></i>模板库
          </button>
          <div className="nav-dropdown" id="nav-settings-menu">
            <button type="button" className="nav-item nav-drop-trigger" id="nav-settings-trigger" data-action="toggle-settings-nav">
              <i data-lucide="sliders-horizontal" width="16"></i>
              <span>系统设置</span>
              <i className="nav-drop-caret" data-lucide="chevron-down" width="14" height="14"></i>
            </button>
            <div className="nav-dropdown-panel" id="nav-settings-dropdown">
              <button type="button" className="nav-drop-item" data-action="open-v8-jump-modal">
                <i data-lucide="user-cog" width="16"></i>
                <span>用户与权限管理</span>
                <i className="nav-drop-ext" data-lucide="external-link" width="14"></i>
              </button>
              <button type="button" className="nav-drop-item" data-action="open-settings-dict">
                <i data-lucide="layers-3" width="16"></i>
                <span>自定义分类配置</span>
              </button>
              <button type="button" className="nav-drop-item" data-action="open-settings-storage">
                <i data-lucide="hard-drive" width="16"></i>
                <span>系统存储管理</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* suppressHydrationWarning ensures React does not conflict with vanilla JS innerHTML updates inside #page */}
      <main id="page" ref={pageContainerRef} suppressHydrationWarning></main>

      <div id="popover" className="toolbar-pop"></div>
      <div id="modalRoot" className="modal-mask"></div>
      <div id="toast" className="toast"></div>
      <div className="watermark"></div>
    </div>
  );
}
