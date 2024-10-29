export default {
    install(Vue, options) {
      // 引入外部JS
      const script = document.createElement('script');
      script.src = 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900';
      script.onload = () => {
        console.log('External JS Loaded');
      };
      document.head.appendChild(script);
    }
  };