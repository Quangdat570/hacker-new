# React-Router là gì?
- React-Router là một thư viện định tuyến (routing) tiêu chuẩn trong React. Nó giữ cho giao diện của ứng dụng đồng bộ với URL trên trình duyệt. React-Router cho phép bạn định tuyến "luồng dữ liệu" (data flow) trong ứng dụng của bạn một cách rõ ràng. Nó tương đương với sự khẳng định, nếu bạn có URL này, nó sẽ tương đương với Route này, và giao diện tương ứng.
- Phiên bản mới nhất hiện tại là v4.
- Cài đặt:
- ` npm install react-router-dom --save `
# Các thành phần trong React-Router
1.  BrowserRouter vs HashRouter
- `React-Router` cung cấp cho chúng 2 thành phần hay sử dụng đó là `BrowserRouter` & `HashRouter`. Hai thành phần này khác nhau ở kiểu URL mà chúng sẽ tạo ra và đồng bộ.
- `BrowserRouter`: Được sử dụng phổ biến hơn, nó sử dụng History API có trong HTML5 để theo dõi lịch sử bộ định tuyến của bạn.
- `HashRouter`: Sử dụng hash của URL (window.location.hash) để ghi nhớ mọi thứ.
- `import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
`
2. Route
- `Route`: Định nghĩa một ánh xạ (mapping) giữa một URL và một Component. Điều đó có nghĩa là khi người dùng truy cập theo một URL trên trình duyệt, một Component tương ứng sẽ được render trên giao diện
``` javascript
<Router>
    <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound}/>
    </div>
</Router>

```
Trong đó:
- **path**: Là đường dẫn trên URL
- **exact**: Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
- **component**: Là component sẽ đươc load ra tương ứng với Route đó
3.  Link
Trong HTML thì cặp thẻ để chuyển hướng đó là thẻ `<a></a>` thì trong react chúng ta sẽ dử dụng cặp thẻ `<Link></Link>` được import từ React-Router.

`<Link to="/about">About</Link>`
trong đó:
- **to**: Giống như thuộc tính href trong thẻ a.
4.  NavLink
`NavLink` thì rất giống với Link về cách sử dụng, nhưng **NavLink** tốt hơn vì nó hỗ trợ thêm một số thuộc tính như là **activeClassName** và **activeStyle** 2 thuộc tính này giúp cho khi mà nó trùng khớp thì nó sẽ được active lên và chúng ta có thể style cho nó
```javascript
<NavLink exact activeStyle={{
    backgroundColor : 'white',
    color : 'red'
}} to="/" className="my-link">Trang Chu</NavLink>

```
5. Custom Link
ở trên ta có thẻ NavLink giúp chúng ta có thêm một thuộc tính nhưng giả sử khi bạn không muốn activeClassName hoặc activeStyle tại thẻ NavLink mà nó lại nằm ở một thẻ bao nó ví dụ như thẻ div hay thẻ li thì sao? sau đây mình sẽ custom lại để có thể sử dụng các class hoặc style ở thẻ bao ngoài của nó.

``` javascript
const MenuLink = ({
    label, // nội dung trong thẻ
    to, // giống như href trong thẻ a
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active abc' : '';

                return (
                    <li className={`my-li ${active}`}>
                        <Link  to={to} className="my-link">{label}</Link>
                    </li>
                );
            }}
        />
    );
}

```

6. Đối tượng Match
Khi bạn muốn lấy một số thông tin ở trên URL thì bạn có thể dùng đối tượng `match` để lấy dữ liệu về. Tại cấu hình `Router` ta chỉ cần truyền thêm đối tượng `match` vào component mà cần sử dụng đối tượng `match`

``` javascript
   {
        path : '/products',
        exact : false,
        main : ({match}) => <Products match={match} />
    }

```

7. Đối tượng prompt - Xác nhận trước khi chuyển trang
Giả sử khi bạn đang nhập liệu ở form nào đó mà không may click nút back hay chuyển trang thì thôi xong dữ liệu bạn nhập sẽ mất hết để khác phục điều đó ta có đối tượng prompt nó sẽ giúp chúng ta trước khi back hay chuyển trang nó sẽ xác nhận xem là chúng ta có chắc chắn muốn back hay chuyển trang không!

Khi muốn sử dụng đối tượng prompt thì chúng ta chỉ cần import nó từ react-router

```javascript
import {Prompt} from 'react-router-dom';

<Prompt 
    when={true} // true | false
    message={ (location) => (`Ban chac chan muon di den ${location.pathname}`) }
/>

```

8. Redirect

- Chức năng dùng để chuyển trang
- Có thể truy xuất thông tin trang trước đó thông qua đối tượng location. Để sử dụng Redirect ta chỉ cần import nó từ react-router.
- `import { Redirect } from 'react-router-dom';`

Khi bạn muốn sử dụng location thì tại cấu hình Router ta chỉ cần truyền thêm đối tượng location vào component mà cần sử dụng đối tượng location.

```javascript
{
    path : '/login',
    exact : false,
    main : ({location}) => <Login location={location} />
}

```
