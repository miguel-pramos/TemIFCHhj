const client = supabase.createClient(
	'https://aumatavqwkirgotqeysu.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1bWF0YXZxd2tpcmdvdHFleXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NjUwNzQsImV4cCI6MjAyNzE0MTA3NH0.SkXxQn8HdQeuT1GeqnKKBdYaw8t5InHwzA5JXUHgKu4'
);

const today = dateFns.endOfToday();
client
	.from('parties')
	.select('*')
	.lte('date', dateFns.endOfToday().toDateString())
	.then(({ data: parties }) => {
		const partyDate = dateFns.parse(parties[0].date);
		const IFCHToday = dateFns.isToday(partyDate);

		const daysWithout = dateFns.differenceInDays(today, partyDate);

		console.log('TR');
		document.querySelector('.daysWithout').textContent = `Estamos há ${daysWithout} ${
			daysWithout != 1 ? 'dias' : 'dia'
		} sem IFCH!`;
	});
