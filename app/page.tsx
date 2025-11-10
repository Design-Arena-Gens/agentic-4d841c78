export default function Home() {
  return (
    <div className="presentation">
      {/* Slide 1: Title */}
      <div className="slide">
        <h1>AI轉型推動計畫</h1>
        <p className="subtitle">組織AI創新應用與執行方案</p>
        <div className="highlight-box">
          <h3>核心理念</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            將AI應用能力與績效考核綁定，讓AI使用成為必要而非選擇題，
            透過系統化推動培養跨部門種子員工，組成團隊解決實際業務痛點
          </p>
        </div>
      </div>

      {/* Slide 2: Three-Phase Strategy */}
      <div className="slide">
        <h2>三階段推動策略</h2>
        <div className="phase-container">
          <div className="phase">
            <span className="phase-number">1</span>
            <h3>AI危機感喚起</h3>
            <ul>
              <li>透過產業案例與競爭分析，建立組織對AI轉型的急迫感</li>
              <li>展示未導入AI的潛在風險與競爭劣勢</li>
              <li>高階主管共識凝聚與轉型承諾</li>
            </ul>
          </div>

          <div className="phase">
            <span className="phase-number">2</span>
            <h3>AI案例連結與創新</h3>
            <ul>
              <li>使用Google提供的工具及資源產生產業應用案例</li>
              <li>從案例研究切入，激發創新思維</li>
              <li>從AI工具應用切入，探索實際應用場景</li>
              <li>設計機制確保產生足夠數量的創意方案</li>
            </ul>
          </div>

          <div className="phase">
            <span className="phase-number">3</span>
            <h3>實際落地試行</h3>
            <ul>
              <li>篩選有價值的方案進行試點實施</li>
              <li>跨部門種子團隊組建與培訓</li>
              <li>針對業務痛點設計AI解決方案</li>
              <li>持續追蹤成效並優化調整</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 3: Innovation Approaches */}
      <div className="slide">
        <h2>創新激發雙軌機制</h2>
        <div className="strategy-grid">
          <div className="strategy-card">
            <h3>軌道一：案例研究切入</h3>
            <ul>
              <li>收集國內外AI成功應用案例</li>
              <li>分析相似產業的轉型經驗</li>
              <li>舉辦案例分享會與工作坊</li>
              <li>促進跨部門交流與啟發</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>軌道二：AI工具應用切入</h3>
            <ul>
              <li>導入Google AI工具與平台</li>
              <li>提供實作訓練與技術支援</li>
              <li>鼓勵員工探索工具應用可能性</li>
              <li>建立內部最佳實踐資料庫</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h3>創意產出機制</h3>
          <div className="goal-list">
            <ul>
              <li>設定每季度創意提案目標數量（建議：每部門至少3-5個提案）</li>
              <li>建立創意評選委員會，定期審核提案可行性</li>
              <li>提供創新獎勵機制，鼓勵員工積極參與</li>
              <li>採用快速原型驗證，降低試錯成本</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 4: Organizational Execution */}
      <div className="slide">
        <h2>組織與執行面規劃</h2>

        <div className="content-section">
          <h3>推動原則</h3>
          <div className="goal-list">
            <ul>
              <li>設定適當期望值，從改善AI創新應用能力開始</li>
              <li>讓高層「看到曙光」，建立持續推動的信心</li>
              <li>採用敏捷迭代方式，快速驗證調整</li>
              <li>重視實際成效而非形式完美</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h3>績效考核整合</h3>
          <div className="highlight-box">
            <ul>
              <li>將AI應用能力納入個人績效指標</li>
              <li>設定部門AI創新應用KPI</li>
              <li>建立AI專案貢獻積分制度</li>
              <li>連結晉升與培訓機會</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 5: Timeline */}
      <div className="slide">
        <h2>計畫時程規劃</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2025年2月</div>
            <div className="timeline-content">
              <strong>計畫啟動</strong><br/>
              完成計畫規劃、資源配置與團隊組建
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025年5月</div>
            <div className="timeline-content">
              <strong>第一次檢視</strong><br/>
              評估第一階段危機感喚起成效，調整策略方向
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025年8月</div>
            <div className="timeline-content">
              <strong>第二次檢視</strong><br/>
              檢視創意產出數量與質量，篩選試點專案
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2025年11月</div>
            <div className="timeline-content">
              <strong>第三次檢視</strong><br/>
              評估試點專案進度，準備成果發表
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2026 Q3~Q4</div>
            <div className="timeline-content">
              <strong>成果發表會</strong><br/>
              展示AI實際落地應用成果，分享經驗與最佳實踐
            </div>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
            每三個月進行一次進度檢視，確保計畫執行方向正確，
            並根據實際情況靈活調整策略與資源配置
          </p>
        </div>
      </div>

      {/* Slide 6: Expected Outcomes */}
      <div className="slide">
        <h2>預期成果與目標</h2>

        <div className="strategy-grid">
          <div className="strategy-card">
            <h3>短期目標（6個月）</h3>
            <ul>
              <li>完成全員AI認知教育</li>
              <li>產生30+創新應用提案</li>
              <li>啟動3-5個試點專案</li>
              <li>培養50+種子員工</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>中期目標（12個月）</h3>
            <ul>
              <li>完成5+AI應用落地案例</li>
              <li>建立內部AI知識庫</li>
              <li>形成跨部門協作機制</li>
              <li>展現可量化業務效益</li>
            </ul>
          </div>

          <div className="strategy-card">
            <h3>長期目標（18個月）</h3>
            <ul>
              <li>AI應用成為日常工作方式</li>
              <li>建立持續創新文化</li>
              <li>形成組織競爭優勢</li>
              <li>成為產業AI轉型標竿</li>
            </ul>
          </div>
        </div>

        <div className="highlight-box" style={{ marginTop: '2rem' }}>
          <h3>核心成功指標</h3>
          <ul>
            <li>AI工具使用率達80%以上</li>
            <li>業務流程效率提升20%以上</li>
            <li>員工AI能力滿意度達4.0/5.0以上</li>
            <li>創新提案轉化率達30%以上</li>
          </ul>
        </div>
      </div>

      {/* Slide 7: Resources and Support */}
      <div className="slide">
        <h2>資源與支援體系</h2>

        <div className="content-section">
          <h3>Google工具與資源</h3>
          <div className="goal-list">
            <ul>
              <li>Gemini AI助理：提升日常工作效率</li>
              <li>Google Cloud AI Platform：企業級AI解決方案</li>
              <li>Google Workspace AI功能：智慧文件、郵件、會議協作</li>
              <li>Google AI教育資源：線上課程與認證培訓</li>
              <li>Google產業案例庫：參考最佳實踐經驗</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <h3>內部支援機制</h3>
          <div className="goal-list">
            <ul>
              <li>成立AI推動辦公室，提供專案支援</li>
              <li>建立內部AI專家顧問團隊</li>
              <li>設立創新基金支持試點專案</li>
              <li>提供定期培訓與工作坊</li>
              <li>建立內部社群促進知識分享</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Slide 8: Call to Action */}
      <div className="slide">
        <h2>行動呼籲</h2>

        <div className="highlight-box" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>現在就是最好的開始</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            AI轉型不是未來的議題，而是當下的必然選擇。
            讓我們攜手共創組織的AI新時代，將挑戰化為機遇，讓創新成為日常。
          </p>
        </div>

        <div className="content-section">
          <h3>立即行動項目</h3>
          <div className="goal-list">
            <ul>
              <li>高階主管會議確認計畫方向與資源承諾</li>
              <li>成立AI推動專案小組並分配職責</li>
              <li>啟動第一波危機感喚起活動</li>
              <li>規劃2025年2月正式啟動大會</li>
              <li>開始收集產業標竿案例與工具評估</li>
            </ul>
          </div>
        </div>

        <div className="content-section" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.3rem', color: '#667eea', fontWeight: 'bold' }}>
            讓AI成為組織成長的加速器，而非競爭中的落後者
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>AI轉型推動計畫 | 2025年啟動</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
          共創智慧未來，成就卓越組織
        </p>
      </div>
    </div>
  )
}
