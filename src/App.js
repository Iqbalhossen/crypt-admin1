import React from 'react'
import './assets/global/css/line-awesome.min.css';
import './assets/admin/css/app.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Layouts/HomeMain';
import Home from './Components/Home/Home';
import CryptoCurrency from './Components/Pages/CryptoCurrency/CryptoCurrency';
import TradeSetting from './Components/Pages/TradeSetting/TradeSetting';
import Staff from './Components/Pages/Staff/Staff';
import TradeLogAll from './Components/Pages/TradeLog/TradeLogAll/TradeLogAll';
import WinTradeLog from './Components/Pages/TradeLog/WinTradeLog/WinTradeLog';
import LossTradeLog from './Components/Pages/TradeLog/LossTradeLog/LossTradeLog';
import DrawTradeLog from './Components/Pages/TradeLog/DrawTradeLog/DrawTradeLog';
import AllPracticeTradeLog from './Components/Pages/PracticeTradeLog/AllPracticeTradeLog/AllPracticeTradeLog';
import WinPracticeTradeLog from './Components/Pages/PracticeTradeLog/WinPracticeTradeLog/WinPracticeTradeLog';
import LossPracticeTradeLog from './Components/Pages/PracticeTradeLog/LossPracticeTradeLog/LossPracticeTradeLog';
import DrawPracticeTradeLog from './Components/Pages/PracticeTradeLog/DrawPracticeTradeLog/DrawPracticeTradeLog';
import ActiveUsers from './Components/Pages/Users/ActiveUsers/ActiveUsers';
import BannedUsers from './Components/Pages/Users/BannedUsers/BannedUsers';
import EmailUnverifiedUsers from './Components/Pages/Users/EmailUnverifiedUsers/EmailUnverifiedUsers';
import PendingDeposits from './Components/Pages/Deposits/PendingDeposits/PendingDeposits';
import WithdrawalMethods from './Components/Pages/Withdrawal/WithdrawalMethods/WithdrawalMethods';
import CryptoCurrencyEdit from './Components/Pages/CryptoCurrency/CryptoCurrencyEdit';
import TradeSettingEdit from './Components/Pages/TradeSetting/TradeSettingEdit';
import AllDeposits from './Components/Pages/Deposits/AllDeposits/AllDeposits';
import ManualGateways from './Components/Pages/PaymentGateways/ManualGateways/ManualGateways';
import ManualGatewaysEdit from './Components/Pages/PaymentGateways/ManualGateways/ManualGatewaysEdit';
import ManualGatewayAdd from './Components/Pages/PaymentGateways/ManualGateways/ManualGatewayAdd';
import DepositsDetails from './Components/Pages/Deposits/DepositsDetails/DepositsDetails';
import RejectDeposits from './Components/Pages/Deposits/RejectDeposits/RejectDeposits';
import ApprovedDeposits from './Components/Pages/Deposits/ApprovedDeposits/ApprovedDeposits';
import SuccessfulDeposits from './Components/Pages/Deposits/SuccessfulDeposits/SuccessfulDeposits';
import WithdrawalsLog from './Components/Pages/Withdrawal/WithdrawalsLog/WithdrawalsLog';
import WithdrawalsDetails from './Components/Pages/Withdrawal/WithdrawalsDetails/WithdrawalsDetails';
import PendingWithdrawals from './Components/Pages/Withdrawal/PendingWithdrawals/PendingWithdrawals';
import ApprovedWithdrawals from './Components/Pages/Withdrawal/ApprovedWithdrawals/ApprovedWithdrawals';
import RejectedWithdrawals from './Components/Pages/Withdrawal/RejectedWithdrawals/RejectedWithdrawals';
import ManagePages from './Components/Pages/ManagePages/ManagePages/ManagePages';
import TopBannarSection from './Components/Pages/ManageSection/TopBannarSection/TopBannarSection';
import EventSection from './Components/Pages/ManageSection/EventSection/EventSection';
import SliderView from './Components/Pages/ManageSection/Slider/SliderView';
import SliderEdit from './Components/Pages/ManageSection/Slider/SliderEdit';
import Notices from './Components/Pages/ManageSection/Notices/Notices';
import NoticesEdit from './Components/Pages/ManageSection/Notices/NoticesEdit';
import Cryptocurrencies from './Components/Pages/ManageSection/Cryptocurrencies/Cryptocurrencies';
import NewListing from './Components/Pages/ManageSection/NewListing/NewListing';
import ChooseGFFEX from './Components/Pages/ManageSection/ChooseGFFEX/ChooseGFFEX';
import Community from './Components/Pages/ManageSection/Community/Community';
import OurProducts from './Components/Pages/ManageSection/OurProducts/OurProducts';
import OurProductsAdd from './Components/Pages/ManageSection/OurProducts/OurProductsAdd';
import OurProductsEdit from './Components/Pages/ManageSection/OurProducts/OurProductsEdit';
import GffexApp from './Components/Pages/ManageSection/GffexApp/GffexApp';
import StartTradeBtn from './Components/Pages/ManageSection/StartTradeBtn/StartTradeBtn';
import SignUpToTradeBtn from './Components/Pages/ManageSection/SignUpToTradeBtn/SignUpToTradeBtn';
import CommunityBtn from './Components/Pages/ManageSection/CommunityBtn/CommunityBtn';
import CommunityBtnEdit from './Components/Pages/ManageSection/CommunityBtn/CommunityBtnEdit';
import GffexAppBtn from './Components/Pages/ManageSection/GffexAppBtn/GffexAppBtn';
import StaffAdd from './Components/Pages/Staff/StaffAdd';
import StaffEdit from './Components/Pages/Staff/StaffEdit';
import MenuPageUpdate from './Components/Pages/ManagePages/MenuPageUpdate';
import HeaderSetting from './Components/Pages/Setting/HeaderSetting/HeaderSetting';
import FooterSetting from './Components/Pages/Setting/FooterSetting/FooterSetting';
import NewsletterSetting from './Components/Pages/Setting/NewsletterSetting/NewsletterSetting';
import WithdrawalMethodsAdd from './Components/Pages/Withdrawal/WithdrawalMethods/WithdrawalMethodsAdd';
import WithdrawalMethodsEdit from './Components/Pages/Withdrawal/WithdrawalMethods/WithdrawalMethodsEdit';
import Details from './Components/Pages/Users/Details';
import AllUsers from './Components/Pages/Users/AllUsers/AllUsers';
import AutomaticGateways from './Components/Pages/PaymentGateways/AutomaticGateways/AutomaticGateways';
import DepositHistory from './Components/Pages/Users/History/DepositHistory/DepositHistory';
import WithdrawalsHistory from './Components/Pages/Users/History/WithdrawalsHistory/WithdrawalsHistory';
import TradeLogHistory from './Components/Pages/Users/History/TradeLogHistory/TradeLogHistory';
import WinTradeLogHistory from './Components/Pages/Users/History/TradeLogHistory/WinTradeLogHistory';
import LossTradeLogHistory from './Components/Pages/Users/History/TradeLogHistory/LossTradeLogHistory';
import DrawTradeLogHistory from './Components/Pages/Users/History/TradeLogHistory/DrawTradeLogHistory';
import Transaction from './Components/Pages/Transaction/Transaction';
import Subscriber from './Components/Pages/Subscriber/Subscriber';
import SubscriberSendEmail from './Components/Pages/Subscriber/SubscriberSendEmail';
import MobileUnverified from './Components/Pages/Users/MobileUnverified/MobileUnverified';
import KYCUnverifiedUsers from './Components/Pages/Users/KYCUnverifiedUsers/KYCUnverifiedUsers';
import UsersWithBalance from './Components/Pages/Users/UsersWithBalance/UsersWithBalance';
import KYCPendingUsers from './Components/Pages/Users/KYCPendingUsers/KYCPendingUsers';
import KYCData from './Components/Pages/Users/KYCData/KYCData';
import UserLoginHistory from './Components/Pages/Users/History/UserLoginHistory/UserLoginHistory';
import TransactionLogs from './Components/Pages/TransactionLogs/TransactionLogs';
import StaffDetails from './Components/Pages/Staff/StaffDetails';
import Login from './Components/Auth/Login';
import Reset from './Components/Auth/Reset';
import AdminPrivateRoute from './Route/AdminPrivateRoute';
import LoginRoute from './Route/LoginRoute';
import ReSetPassword from './Components/Auth/ReSetPassword';
import Profile from './Components/Pages/Admin/Profile/Profile';
import Password from './Components/Pages/Admin/Password/Password';
import SupportTicketPending from './Components/Pages/SupportTicket/SupportTicketPending/SupportTicketPending';
import SupportClosedTickets from './Components/Pages/SupportTicket/SupportClosedTickets/SupportClosedTickets';
import SupportTicketAnswered from './Components/Pages/SupportTicket/SupportTicketAnswered/SupportTicketAnswered';
import SupportTicketAll from './Components/Pages/SupportTicket/SupportTicketAll/SupportTicketAll';
import SupportTicketDetails from './Components/Pages/SupportTicket/SupportTicketDetails/SupportTicketDetails';
import LiveChats from './Components/Pages/LiveChat/LiveChats/LiveChats';
import FixedDepositView from './Components/Pages/FixedDeposit/FixedDepositView';
import FixedDepositAdd from './Components/Pages/FixedDeposit/FixedDepositAdd';
import FixedDepositEdit from './Components/Pages/FixedDeposit/FixedDepositEdit';
import MiningView from './Components/Pages/Mining/MiningView';
import MiningAdd from './Components/Pages/Mining/MiningAdd';
import MiningEdit from './Components/Pages/Mining/MiningEdit';
import PendingLoan from './Components/Pages/Loan/PendingLoan';
import AprovedNow from './Components/Pages/Loan/AprovedNow';
import SocialSupport from './Components/Pages/SupportTicket/SocialSupport/SocialSupport';


function App() {

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/admin" element={<HomeMain />}>
          <Route path="dashboard" element={<AdminPrivateRoute> <Home /> </AdminPrivateRoute> } />
          <Route path="crypto/currency/list" element={<CryptoCurrency />} />
          <Route path="crypto/currency/edit/:id" element={<CryptoCurrencyEdit />} />
          <Route path="trade/setting" element={<TradeSetting />} />
          <Route path="trade/setting/edit/:id" element={<TradeSettingEdit />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/add" element={<StaffAdd />} />
          <Route path="staff/edit/:id" element={<StaffEdit />} />
          <Route path="staff/details/:id" element={<StaffDetails />} />
          <Route path="trade/log" element={<TradeLogAll />} />
          <Route path="trade/log/wining" element={<WinTradeLog />} />
          <Route path="trade/log/losing" element={<LossTradeLog />} />
          <Route path="trade/log/draw" element={<DrawTradeLog />} />
          <Route path="practice/trade/log" element={<AllPracticeTradeLog />} />
          <Route path="practice/trade/log/wining" element={<WinPracticeTradeLog />} />
          <Route path="practice/trade/log/losing" element={<LossPracticeTradeLog />} />
          <Route path="practice/trade/log/draw" element={<DrawPracticeTradeLog />} />
          <Route path="users/all" element={<AllUsers />} />
          <Route path="users/active" element={<ActiveUsers />} />
          <Route path="users/details/:id" element={<Details />} />
          <Route path="users/banned" element={<BannedUsers />} />
          <Route path="users/email-unverified" element={<EmailUnverifiedUsers />} />
          <Route path="users/mobile-unverified" element={<MobileUnverified />} />
          <Route path="users/kyc-unverified" element={<KYCUnverifiedUsers />} />
          <Route path="users/with-balance" element={<UsersWithBalance />} />
          <Route path="users/kyc-pending" element={<KYCPendingUsers />} />
          <Route path="users/kyc-data/:id" element={<KYCData />} />
          <Route path="deposit/pending" element={<PendingDeposits />} />
          <Route path="deposit" element={<AllDeposits />} />
          <Route path="deposit/rejected" element={<RejectDeposits />} />
          <Route path="deposit/approved" element={<ApprovedDeposits />} />
          <Route path="deposit/successful" element={<SuccessfulDeposits />} />
          <Route path="deposit/details/:id" element={<DepositsDetails />} />
          <Route path="withdraw/method" element={<WithdrawalMethods />} />
          <Route path="withdraw/method/add" element={<WithdrawalMethodsAdd />} />
          <Route path="withdraw/method/edit/:id" element={<WithdrawalMethodsEdit />} />
          <Route path="withdraw/log" element={<WithdrawalsLog />} />
          <Route path="withdraw/pending" element={<PendingWithdrawals />} />
          <Route path="withdraw/approved" element={<ApprovedWithdrawals />} />
          <Route path="withdraw/rejected" element={<RejectedWithdrawals />} />
          <Route path="withdraw/details/:id" element={<WithdrawalsDetails />} />
          <Route path="gateway/automatic" element={<AutomaticGateways />} />
          <Route path="gateway/manual" element={<ManualGateways />} />
          <Route path="gateway/manual/new" element={<ManualGatewayAdd />} />
          <Route path="gateway/manual/edit/:id" element={<ManualGatewaysEdit />} />
          <Route path="frontend/manage-pages" element={<ManagePages />} />
          <Route path="frontend/manage-section/:id" element={<MenuPageUpdate />} />
          <Route path="frontend/frontend-sections/top/bannar/section" element={<TopBannarSection />} />
          <Route path="frontend/frontend-sections/event" element={<EventSection />} />
          <Route path="frontend/frontend-sections/slider" element={<SliderView />} />
          <Route path="frontend/frontend-sections/slider/edit/:id" element={<SliderEdit />} />
          <Route path="frontend/frontend-sections/notices" element={<Notices />} />
          <Route path="frontend/frontend-sections/notices/edit/:id" element={<NoticesEdit />} />
          <Route path="frontend/frontend-sections/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="frontend/frontend-sections/new/listing" element={<NewListing />} />
          <Route path="frontend/frontend-sections/choose/gffex" element={<ChooseGFFEX />} />
          <Route path="frontend/frontend-sections/community" element={<Community />} />
          <Route path="frontend/frontend-sections/our/products" element={<OurProducts />} />
          <Route path="frontend/frontend-sections/our/products/add" element={<OurProductsAdd />} />
          <Route path="frontend/frontend-sections/our/products/edit/:id" element={<OurProductsEdit />} />
          <Route path="frontend/frontend-sections/gffex/app" element={<GffexApp />} />
          <Route path="frontend/frontend-sections/start/trade/btn" element={<StartTradeBtn />} />
          <Route path="frontend/frontend-sections/signup/to/trade/btn" element={<SignUpToTradeBtn />} />
          <Route path="frontend/frontend-sections/community/btn" element={<CommunityBtn />} />
          <Route path="frontend/frontend-sections/community/btn/edit/:id" element={<CommunityBtnEdit />} />
          <Route path="frontend/frontend-sections/gffex/app/btn" element={<GffexAppBtn />} />
          <Route path="header/setting" element={<HeaderSetting />} />
          <Route path="footer/setting" element={<FooterSetting />} />
          <Route path="newsletter/setting" element={<NewsletterSetting />} />
          <Route path="deposit/history/:id" element={<DepositHistory />} />
          <Route path="withdraw/history/:id" element={<WithdrawalsHistory />} />
          <Route path="trade/log/history/:id" element={<TradeLogHistory />} />
          <Route path="trade/log/win/history/:id" element={<WinTradeLogHistory />} />
          <Route path="trade/log/loss/history/:id" element={<LossTradeLogHistory />} />
          <Route path="trade/log/draw/history/:id" element={<DrawTradeLogHistory />} />
          <Route path="report/transaction/history/:id" element={<Transaction />} />
          <Route path="report/login/history/:id" element={<UserLoginHistory />} />
          <Route path="subscriber" element={<Subscriber />} />
          <Route path="subscriber/send-email" element={<SubscriberSendEmail />} />
          <Route path="users/transaction/logs" element={<TransactionLogs />} />
          <Route path="profile" element={<Profile />} />
          <Route path="password" element={<Password />} />
          <Route path="ticket/pending" element={<SupportTicketPending />} />
          <Route path="ticket/closed" element={<SupportClosedTickets />} />
          <Route path="ticket/answered" element={<SupportTicketAnswered />} />
          <Route path="ticket" element={<SupportTicketAll />} />
          <Route path="ticket/view/:id" element={<SupportTicketDetails />} />
          <Route path="fixed/deposit/view" element={<FixedDepositView />} />
          <Route path="fixed/deposit/add" element={<FixedDepositAdd />} />
          <Route path="fixed/deposit/edit/:id" element={<FixedDepositEdit />} />
          <Route path="mining/view" element={<MiningView />} />
          <Route path="mining/add" element={<MiningAdd />} />
          <Route path="mining/edit/:id" element={<MiningEdit />} />
          <Route path="pending/loan" element={<PendingLoan />} />
          <Route path="aproved/loan/:id" element={<AprovedNow />} />
          <Route path="social/support" element={<SocialSupport />} />
         
        </Route>

        
        <Route path="/" element={<LoginRoute><Login /></LoginRoute> } />
        <Route path="/admin/password/reset" element={<LoginRoute><Reset /></LoginRoute> } />
        <Route path="/reset/password/:id/:token" element={<LoginRoute> <ReSetPassword /> </LoginRoute>} />

        <Route path="chats/live" element={<LiveChats />} />
      </Routes>
      
    </BrowserRouter>


  );
}

export default App;