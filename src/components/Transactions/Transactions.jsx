import css from './Transactions.module.css';

const Transactions = ({ transactionHistory = [] }) => (
	<table className={css['transaction-history']}>
		<thead className={css['table-head']}>
			<tr>
				<th>Type</th>
				<th>Amount</th>
				<th>Currency</th>
			</tr>
		</thead>

		<tbody className={css['table-body']}>
			{transactionHistory.map(({ id, type, amount, currency }) => (
				<Transaction key={id} type={type} amount={amount} currency={currency} />
			))}
		</tbody>
	</table>
);

const Transaction = ({ type, amount, currency }) => (
	<tr className={css['table-datarow']}>
		<td className={css['table-column--type']}>{type}</td>
		<td className={css['table-column--amount']}>{amount}</td>
		<td className={css['table-column--currency']}>{currency}</td>
	</tr>
);

export { Transactions };
