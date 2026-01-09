/**
 * {
 *   name: 메뉴 명
 *   path: 메뉴 경로
 *   prePage: 이전 페이지 경로
 *   IsMain: 메인 페이지일 경우 서비스 리스트에서 노출 (true, false)
 *   menuListOption: 서비스 리스트 표시 옵션 access, title, subtitle, img, style (IsMain === true 일때)
 * }
 *
 * ex1. main 메뉴일 경우
 * {
 *     name: 'nameLove',  // 고유한 이름
 *     path: '/namelove', // 전체 경로
 *     prePage: '/personality/',
 *     IsMain: true,       // true일 경우 menuListOption 필요
 *     menuListOption: {
 *       access: true,
 *       title: '이름 궁합 테스트(너와 나.ver)',
 *       subtitle: '너는 나를 얼마나 좋아할까? ♥',
 *       img: 'sumnail_iu.jpg',
 *       style: {
 *         title: 'green_contents_title',
 *         subtitle: 'contents_subtitle'
 *       }
 *     }
 * }
 *
 * ex2. main 메뉴 아닐 경우
 * {
 *     name: 'root',
 *     path: '/',
 *     IsMain: false
 *   }
 */

export default [
  {
    key: 'retronameLove',
    url: '/retro/test/retronamelove/basic',
    IsMain: true,
    priority: 3,
    menuListOption: {
      access: true,
      name: '이름궁합 너와 나.ver',
      service: '레트로',
      service_logo: "/retro/retro_icon.png",
      service_img:"/retro/contents/retronamelove.jpg"
    }
  },
  {
    key: 'retronameLoveus',
    url: '/retro/test/retronameloveus/basic',
    IsMain: true,
    priority: 3,
    menuListOption: {
      access: true,
      name: '이름궁합 우리.ver',
      service: '레트로',
      service_logo: "/retro/retro_icon.png",
      service_img:"/retro/contents/retronameloveus.jpg"
    }
  },
  {
    key: 'persindex',
    url: '/personality/test/persindex/basic',
    IsMain: true,
    priority: 2,
    menuListOption: {
      access: true,
      name: '찐 성격 테스트',
      service: '퍼스널리티',
      service_logo: "/pers/pers_icon.png",
      service_img:"/pers/contents/persindex.jpg"
    }
  },
  {
    key: 'perslove',
    url: '/personality/test/perslove/basic',
    IsMain: true,
    priority: 4,
    menuListOption: {
      access: true,
      name: '성격궁합',
      service: '퍼스널리티',
      service_logo: "/pers/pers_icon.png",
      service_img:"/pers/contents/perslove.jpg"
    }
  },
  {
    key: 'persbingo',
    url: '/personality/test/persbingo/basic',
    IsMain: true,
    priority: 4,
    menuListOption: {
      access: true,
      name: '성격빙고',
      service: '퍼스널리티',
      service_logo: "/pers/pers_icon.png",
      service_img:"/pers/contents/persbingo.jpg"
    }
  },
  {
    key: 'village',
    url: '/village/',
    IsMain: true,
    new:true,
    menuListOption: {
      access: true,
      name: '배배&마리',
      service: '빌리지',
      service_logo: "/village/village_icon.png",
      service_img:"/pers/contents/persbingo.jpg"
    }
  },
  {
    key: '219',
    url: '/collection/219',
    IsMain: true,
    new:true,
    menuListOption: {
      access: true,
      name: 'TWOONENINE',
      service: '콜렉션',
      service_logo: "/collection/collection_icon.png",
      service_img:"/pers/contents/persbingo.jpg"
    }
  },
]

