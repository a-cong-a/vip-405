import { siteConfig } from '@/lib/config'

/**
 * 万维广告插件
 * @param {string} orientation - 广告方向，可以是 'vertical' 或 'horizontal'
 * @param {boolean} sticky - 是否粘性定位
 * @returns {JSX.Element | null} - 返回渲染的 JSX 元素或 null
 */
export default function WWAds({
  orientation = 'vertical',
  sticky = false,
  className
}) {
  // const AD_WWADS_ID = siteConfig('AD_WWADS_ID')

  // if (!AD_WWADS_ID) {
  //   return null
  // }

  return (
    // <div
    //   data-id={AD_WWADS_ID}
    //   className={`wwads-cn 
    //         ${orientation === 'vertical' ? 'wwads-vertical' : 'wwads-horizontal'}
    //         ${sticky ? 'wwads-sticky' : ''} z-10 ${className || ''}`}
    // />
    <div
      data-id="265"
      className="wwads-cn wwads-horizontal z-10"
    >
      <a
        href="https://wwads.cn/click/bait"
        target="_blank"
        rel="sponsored noopener"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ display: 'none !important' }}
      />

      <a
        href="https://wwads.cn/click/bundle?code=5Ps8rTp7XfVKNgn2cprZDJGVQ9TFpO"
        onClick={(e) => _IsTrustedClick(e)}
        className="wwads-img"
        target="_blank"
        rel="sponsored noopener"
        referrerPolicy="no-referrer-when-downgrade"
      >
        <img
          src="https://cdn.wwads.cn/creatives/mgGTpknZKKNVrtI9ctv5WBIFqVydwn8XlODljAgo.jpg"
          width={130}
          alt="万维广告联盟"
        />
      </a>

      <div className="wwads-content">
        <a
          href="https://wwads.cn/click/bundle?code=5Ps8rTp7XfVKNgn2cprZDJGVQ9TFpO"
          onClick={(e) => _IsTrustedClick(e)}
          className="wwads-text"
          target="_blank"
          rel="sponsored noopener"
          referrerPolicy="no-referrer-when-downgrade"
        >
          ☁️腾讯云【首单特惠】
          <b>3️⃣年468元 轻量服务器2核4G6M</b>
          🧑‍🤝‍🧑拼团成功加赠3️⃣个月～
        </a>

        <a
          href="https://wwads.cn/?utm_source=property-322&utm_medium=footer"
          className="wwads-poweredby"
          title="点击了解万维广告联盟"
          target="_blank"
        >
          <img className="wwads-logo" />
          <span className="wwads-logo-text">广告</span>
        </a>
      </div>

      <a
        className="wwads-hide"
        onClick={(e) => e.target.parentNode.remove()}
        title="隐藏广告"
      >
        <svg className="hide-svg" />
      </a>
    </div>

  )
}
